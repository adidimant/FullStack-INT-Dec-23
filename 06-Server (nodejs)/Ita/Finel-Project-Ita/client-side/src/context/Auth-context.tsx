import { createContext, ReactNode, useCallback, useContext, useLayoutEffect, useMemo, useRef, useState } from "react";
import { axiosClient, baseUrl } from "../axiosClient";
import axios, { AxiosError } from "axios";
import { initalizeUserData, useUserContext } from "./User-Context";

type AuthContextType = {
  logout?: () => void;
}

const AuthContext = createContext<AuthContextType>({});

/*
  Auth Provider jobs:
  1) For every request out to the instagram server - add Authorization header
  2) If incoming response from instagram server is 401:
    a) yes token and refresh token - try to create a new accessToken with the refreshToken
    b) if no refreshToken OR refreshToken trying was failed (401) - full logout and redirect to login page
*/

function AuthProvider ({ children }: { children: ReactNode }) {
  const { dispatch: dispatchUserContext } = useUserContext();

  const logout = useCallback(async () => {
    try {
      await axiosClient.post('/api/users/logout'); // make api call to /logout
    } catch(err) {
      console.log('logout api call error: ', err);
    }
    // clear accessToken & refreshToken
    window.localStorage.removeItem('accessToken');
    window.localStorage.removeItem('refreshToken');
    window.localStorage.removeItem('isLoggedIn');

    dispatchUserContext?.(initalizeUserData()); // clear user-context

    window.location.pathname = '/login' // navigate /login page
  }, [dispatchUserContext]);

  const isRefreshTokenActive = useRef(false);

  // create state for the AuthProvider context, the state will include the logout function
  const authContextData: AuthContextType = useMemo(() => ({
    logout,
  }), [logout]);

  // Create interceptors on every request & response from this specific axiosClient with our server:
  useLayoutEffect(() => {
    const requestInterceptor = axiosClient.interceptors.request.use((req) => {
      // add authorization header to the request
      const accessToken = window.localStorage.getItem('accessToken');
      if (typeof accessToken == 'string' && accessToken.length > 0) {
        req.headers.Authorization = `Bearer ${accessToken}`;
      }
      return req;
    });

    const responseInterceptor = axiosClient.interceptors.response.use((res) => {
      return res;
    }, async (err: AxiosError) => {
      const response = err.response;
      if (response?.status == 401) {
        const refreshToken = window.localStorage.getItem('refreshToken');
        if (!refreshToken) {
          if (!response?.config.url?.includes('/api/users/logout')) {
            logout();
          }
          throw err;
        }

        let accessToken;

        try {
          // we use here axios and NOT axiosClient to avoid interruptions of the request & response interceptors
          // (using localStorage) check if we already called in the lest minute to /token, if yes - don't call /token and use last token
          //TODO - next lesson check with short expiry accessToken
          const lastAccessTokenRenewalStr = window.localStorage.getItem('latr');
          const lastAccessTokenRenewal = lastAccessTokenRenewalStr ? parseInt(lastAccessTokenRenewalStr) : 0;
          if (!isRefreshTokenActive.current && (Date.now() - lastAccessTokenRenewal > 10000 || !window.localStorage.getItem('accessToken'))) {
            isRefreshTokenActive.current = true;
            const response = await axios.get(baseUrl + '/api/users/token', {
              headers: { Authorization: `Bearer ${refreshToken}`},
            });

            window.localStorage.setItem('latr', Date.now().toString()); // latr = last access token renewal/refresh date
  
            accessToken = response.data.accessToken;
            window.localStorage.setItem('accessToken', accessToken);
            isRefreshTokenActive.current = false;
          } else {
            if (isRefreshTokenActive.current == true) {
              // Promise to handle the parralel interceptors that aren't refreshing the token, in their case - they just wait until the refreshToken renewal finished and only then the promise is resolved 
              await new Promise((res) => {
                const interval = setInterval(() => {
                  if (isRefreshTokenActive.current == false) {
                    clearInterval(interval);
                    res(true);
                  }
                }, 200);
              });
            }
            accessToken = window.localStorage.getItem('accessToken');
          }
        } catch(err) {
          isRefreshTokenActive.current = false;
          if (!response?.config.url?.includes('/api/users/logout')) {
            logout();
          }
        }

        if (accessToken) {
          // retry the failed request with the new accessToken in the auth header
          const originalRequest = err.config;
          if (originalRequest) {
            originalRequest.headers.Authorization = `Bearer ${accessToken}`;
            return await axios.request(originalRequest);
          }
        }
      }
      throw err;
    });

    return () => {
      axiosClient.interceptors.request.eject(requestInterceptor);
      axiosClient.interceptors.response.eject(responseInterceptor);
    };
  }, []);

    return (
        <AuthContext.Provider value={authContextData}>
          {children}
        </AuthContext.Provider>
      );
}

export const useAuthContext = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    // if there is no value the hook is not being called within a function component that is rendered within a `ThemeContext`
    throw new Error('useAuthContext must be used within App');
  }
  return context;
};

export default AuthProvider;
import { createContext, ReactNode, useEffect } from "react";
import { axiosClient, baseUrl } from "../axiosClient";
import axios from "axios";

const AuthContext = createContext(undefined);

/*
  Auth Provider jobs:
  1) For every request out to the instagram server - add Authorization header
  2) If incoming response from instagram server is 401:
    a) yes token and refresh token - try to create a new accessToken with the refreshToken
    b) if no refreshToken OR refreshToken trying was failed (401) - full logout and redirect to login page
*/

function AuthProvider ({ children }: { children: ReactNode }) {
  useEffect(() => {
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
    }, async (err) => {
      const response = err.response;
      if (response.status == 401) {
        const refreshToken = window.localStorage.getItem('refreshToken');
        if (!refreshToken) {
          // logout()
          return;
        }

        try {
          // we use here axios and NOT axiosClient to avoid interruptions of the request & response interceptors
          const response = await axios.get(baseUrl + '/api/users/token', {
            headers: { Authorization: `Bearer ${refreshToken}`},
          });
          const accessToken = response.data.accessToken;
          window.localStorage.setItem('accessToken', accessToken);

          // retry the failed request with the new accessToken in the auth header
          const originalRequest = err.config;
          originalRequest.headers.Authorization = `Bearer ${accessToken}`;
          return axios.request(originalRequest);
        } catch(err) {
          // logout()
        }
      }
    });

    return () => {
      axiosClient.interceptors.request.eject(requestInterceptor);
      axiosClient.interceptors.response.eject(responseInterceptor);
    };
  }, []);

    return (
        <AuthContext.Provider value={undefined}>
          {children}
        </AuthContext.Provider>
      );
}

export default AuthProvider;





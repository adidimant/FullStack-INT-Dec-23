import { createContext, ReactNode, useMemo, useState, useContext } from "react";

type User = {
    isLoggedIn: boolean;
    email: string;
    firstName: string;
    lastName: string;
    userId: string;
    devices: string[];
};

type UserContextType = {
    user: User,
    dispatch?: (user: User) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

function UserProvider ({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User>(undefined);

    const contextData: UserContextType = useMemo(() => ({
        user,
        dispatch: setUser,
    }), [user])

    return (
        <UserContext.Provider value={{ contextData }}>
          {children}
        </UserContext.Provider>
      );
}

export default UserProvider;


export const useUserContext = (): UserContextType => {
  const context = useContext(UserContext);
  if (context === undefined) {
    // if there is no value the hook is not being called within a function component that is rendered within a `ThemeContext`
    throw new Error('useThemeContext must be used within App');
  }
  return context;
};




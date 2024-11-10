import { createContext, ReactNode, useMemo, useState, useContext } from "react";

type User = {
    isLoggedIn: boolean;
    email: string;
    firstName: string;
    lastName: string;
    userId: string;
    username: string;
    birthdate: string;
    devices: string[];
};

type UserContextType = {
    userData: User,
    dispatch?: (user: User) => void;
}

const initalizeUserData = () => {
  return {
    isLoggedIn: false,
    email: '',
    firstName: '',
    lastName: '',
    userId: '',
    username: '',
    birthdate: '',
    devices: [],
  }
}

const UserContext = createContext<UserContextType | undefined>(undefined);

function UserProvider ({ children }: { children: ReactNode }) {
    const [userData, setUserData] = useState<User>(initalizeUserData());

    const contextData: UserContextType = useMemo(() => ({
        userData,
        dispatch: setUserData,
    }), [userData]);

    return (
        <UserContext.Provider value={contextData}>
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




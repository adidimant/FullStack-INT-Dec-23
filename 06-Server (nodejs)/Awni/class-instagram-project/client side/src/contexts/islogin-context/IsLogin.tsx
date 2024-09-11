import { createContext, memo, useContext, useMemo, useState } from "react";

type UserContextType = {
    isLoggedIn: boolean;
    email: string;
    firstname: string;
    lastName: string;
    userId: string;
    devices: string[];
    dispatch: React.Dispatch<React.SetStateAction<UserContextType>>; // זוהי פונקציה שלוקחת מצב חדש ומעדכנת איתו את המצב 
    toggleLogin: () => void; //זוהי פונקציה שמחליפה את מצב הכניסה 
};

export const UserContext = createContext<UserContextType | undefined>(undefined);

function UserProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<UserContextType>({ // ערך ברירת המחדל של ההקשר הוא אובייקט עם המאפיינים והשיטות הבאים
        isLoggedIn: false,
        email: '',
        firstname: '',
        lastName: '',
        userId: '',
        devices: [],
        dispatch: () => { },
        toggleLogin: () => { },
    });

    const toggleLogin = () => {
        setUser((prevUser) => ({
            ...prevUser, // שמור על המצב הקודם כפי שהוא
            isLoggedIn: !prevUser.isLoggedIn, // Toggle the login state between true and false 
        }));
    };

    const contextData = useMemo(() => ({
        ...user, // הפיצו את כל המאפיינים והשיטות של אובייקט המשתמש
        dispatch: setUser, // עדכן את המדינה עם מצב חדש
        toggleLogin, // החלף את מצב הכניסה
    }), [user]);

    return (
        <UserContext.Provider value={contextData}>
            {children}
        </UserContext.Provider>
    )

}

export default memo(UserProvider);

export const useUserContext = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUserContext must be used within a UserProvider');
    }
    return context;
}
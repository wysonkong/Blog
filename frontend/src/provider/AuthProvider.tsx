import {createContext, useContext, useEffect, useState} from "react";
import {login, getUserById} from "@/client/Client.ts"
import type {User} from "@/interface/User.tsx"


interface AuthContextType {
    handleLogin: (username: string, password: string) => void;
    handleLogout: () => void;
    user: User| null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider = ({children}: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);


    useEffect(() => {
        async function loadUser() {
            const storedUserId = sessionStorage.getItem("userId");

            if (storedUserId) {
                const curUser = await getUserById(Number(storedUserId));
                setUser(curUser);
            }
            else {
                setUser(null)
            }
        }
        loadUser();
    }, []);



    const handleLogin = async (username: string, password: string) => {
        const curUser = await login(username, password);
        setUser(curUser);
        if(!user) return;
        sessionStorage.setItem("user", user.toString());
        console.log(user)
    };

    const handleLogout = () => {
        sessionStorage.removeItem("sessionId");
        sessionStorage.removeItem("userId");
    };

    return (
        <AuthContext.Provider value={{ handleLogin, handleLogout, user}}>
            {children}
        </AuthContext.Provider>
    );
};
export default AuthProvider

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider")
    }
    return context
}
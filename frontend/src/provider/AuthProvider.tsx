import {createContext, useContext, useEffect, useState} from "react";
import {login, getUserById, signUp} from "@/client/Client.ts"
import type {User} from "@/interface/User.tsx"
import {useNavigate} from "react-router";


interface AuthContextType {
    handleLogin: (username: string, password: string) => void;
    handleSignUp: (username: string, password: string) => void;
    handleLogout: () => void;
    user: User| null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider = ({children}: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const navigate = useNavigate();


    useEffect(() => {
        async function loadUser() {
            const storedUser = sessionStorage.getItem("userId");
            console.log(storedUser);
            if (storedUser) {
                const curUser = await getUserById(Number(storedUser));
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
        if(!curUser) return;
        sessionStorage.setItem("userId", curUser.id.toString());
        console.log(curUser)
        if (curUser) navigate("/home");
    };

    const handleSignUp = async (username: string, password: string) => {
        const curUser = await signUp(username, password);
        setUser(curUser);
        if(!curUser) return;
        sessionStorage.setItem("userId", curUser.id.toString());
        console.log(curUser)
        if (curUser) navigate("/home");
    }

    const handleLogout = () => {
        sessionStorage.removeItem("userId");
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ handleLogin, handleLogout, handleSignUp, user}}>
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
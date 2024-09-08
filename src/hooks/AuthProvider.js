import {useContext, createContext, useState} from "react";


const AuthContext = createContext();


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("educationalPlatform")) || null);
    const [token, setToken] = useState(localStorage.getItem("educationalPlatform") || "");

    return (
        <AuthContext.Provider value={{ token, user, setUser, setToken }}>
            {children}
        </AuthContext.Provider>
    );

};
export default AuthProvider;

export const useAuth = () => {
    return useContext(AuthContext);
};

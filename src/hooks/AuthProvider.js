import {useContext, createContext, useState} from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    // Check if the item exists in localStorage before parsing
    const getUserFromStorage = () => {
        const storedUser = localStorage.getItem("educationalPlatform");
        if (storedUser) {
            try {
                return JSON.parse(storedUser);
            } catch (error) {
                console.error("Error parsing JSON: ", error);
                return null;  // Return null if parsing fails
            }
        }
        return null;
    };

    const [user, setUser] = useState(getUserFromStorage());
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

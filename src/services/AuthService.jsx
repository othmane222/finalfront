import axios from 'axios';

const API_URL = 'http://localhost:8081/api/users/';

const login = async (email, password) => {
    const response = await axios.post(API_URL + 'login', new URLSearchParams({ email, password }));
    if (response.data) {
        console.log("Logging in user:", response.data);
        // Save the user object in localStorage
        localStorage.setItem('user', JSON.stringify(response.data)); // Ensure role is saved
    }
    return response;
};

const getUserRole = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user || !user.role) {
        console.warn("No user or role found in localStorage");
        return null;
    }
    console.log("Retrieved role:", user.role); // Make sure role is correct
    return user.role;
};
const signup = (username, email, password, role) => {
    return axios.post(API_URL + 'signup', new URLSearchParams({ username, email, password, role }));
};

const AuthService = {
    login,
    signup,
    getUserRole,
};

export default AuthService;

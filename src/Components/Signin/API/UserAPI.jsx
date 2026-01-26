import axios from "axios";
import { useState } from "react";

export default function useLogin() {
    const [error, setError] = useState(null);
    const url = "http://localhost:8080/auth/login";
    const login = async (username, password) => {
        const userData = {
            username: username,
            userpassword: password
        }
        console.log(userData)
        console.log("Login URL:", url);

        try {
            const response = await axios.post(url, userData,
                {
                    headers: { "Content-Type": "application/json" },
                    withCredentials: true
                }
            );
            setError(null);
            return response.data;
        } catch (err) {
            const message =
                typeof err.response?.data === "string"
                    ? err.response.data
                    : err.response?.data?.message
                    ?? err.message
                    ?? "Unknown error";
            setError(String(message));
            throw err;
        }
    }
    return { login, error };
}
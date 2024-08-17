import { useState } from "react"
import { toast } from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();

    const login = async (username, password) => {

        const success = handleInputErrors(username, password);
        if (!success) return;

        setLoading(true);
        try {
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await res.json();
            if (data.error) {
                throw new Error(data.error);
            }

            localStorage.setItem("chat-user", JSON.stringify(data));
            setAuthUser(data);


        } catch (error) {
            toast(error.message,
                {
                    icon: '🚨',
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#0470e4',
                    },
                }
            );
        } finally {
            setLoading(false);
        }
    };

    return { loading, login };
};

export default useLogin;

function handleInputErrors(username, password) {
    if (!username) {
        toast('Please fill in the Username',
            {
                icon: '🚨',
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#0470e4',
                },
            }
        );
        return false;
    } else if (!password) {
        toast('Please fill in the Password',
            {
                icon: '🚨',
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#0470e4',
                },
            }
        );
        return false;
    } else if (password.length < 8) {
        toast('Password must be at least 8 characters long',
            {
                icon: '🚨',
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#0470e4',
                },
            }
        );
        return false;
    }
    return true;
}
import { useState } from "react"
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useSignup = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();

    const signup = async ({ firstName, lastName, username, password, confirmPassword, gender }) => {
        const success = handleInputErrors({ firstName, lastName, username, password, confirmPassword, gender });
        if (!success) return;

        setLoading(true);
        try {

            const res = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ firstName, lastName, username, password, confirmPassword, gender })
            });

            const data = await res.json();
            if (data.error) {
                throw new Error(data.error);
            }

            // Save user data in local storage
            localStorage.setItem('chat-user', JSON.stringify(data));
            // Context
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

    return { loading, signup };
};

export default useSignup;

function handleInputErrors({ firstName, lastName, username, password, confirmPassword, gender }) {
    if (!firstName) {
        toast('Please fill in the First Name',
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
    } else if (!lastName) {
        toast('Please fill in the Last Name',
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
    } else if (!username) {
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
    } else if (!confirmPassword) {
        toast('Please fill in the Confirm Password',
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
    } else if (password !== confirmPassword) {
        toast('Passwords do not match',
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
    } else if (!gender) {
        toast('Please select a Gender',
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
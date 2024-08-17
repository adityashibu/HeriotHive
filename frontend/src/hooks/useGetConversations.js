import { useState } from "react";
import toast from "react-hot-toast";
import { useEffect } from "react";

const useGetConversations = () => {
    const [loading, setLoading] = useState(false);
    const [conversations, setConversations] = useState([]);

    useEffect(() => {
        const getConversations = async () => {
            setLoading(true);
            try {
                const res = await fetch('/api/users');
                const data = await res.json();
                if (data.error) {
                    throw new Error(data.error);
                }

                setConversations(data);
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
        }

        getConversations();
    }, []);

    return { loading, conversations };
};

export default useGetConversations
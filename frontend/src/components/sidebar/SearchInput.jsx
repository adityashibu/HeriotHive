import { useState } from "react";
import { MdOutlinePersonSearch } from "react-icons/md";
import useConversation from "../../store/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";

const SearchInput = () => {
    const [search, setSearch] = useState("");
    const { setSelectedConversation } = useConversation();
    const { conversations } = useGetConversations();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!search) return;
        if (search.length < 3) {
            return toast("Search query must be at least 3 characters long",
                {
                    icon: '🚨',
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#0470e4',
                    },
                }
            );
        };

        const conversation = conversations.find((c) =>
            c.firstName.toLowerCase().includes(search.toLowerCase()) ||
            c.lastName.toLowerCase().includes(search.toLowerCase())
        );

        if (conversation) {
            setSelectedConversation(conversation);
            setSearch('');
        } else toast("No user found with that name",
            {
                icon: '🚨',
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#0470e4',
                },
            }
        );
    }

    return (
        <form className='flex items-center gap-2' onSubmit={handleSubmit}>
            <input type="text" placeholder='Search for users' className="input input-bordered rounded-full"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <button type='submit' className="btn btn-circle bg-primaryBlue text-white">
                <MdOutlinePersonSearch className="w-6 h-6 outline-none" />
            </button>
        </form>
    )
}

export default SearchInput
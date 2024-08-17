import { useEffect } from "react";
import useConversation from "../../store/useConversation";
import MessageInput from "./MessageInput"
import Messages from "./Messages"
import { TiMessages } from "react-icons/ti";

const MessageContainer = () => {
    const { selectedConversation, setSelectedConversation } = useConversation();

    useEffect(() => {
        return () => setSelectedConversation(null);
    }, [setSelectedConversation])

    return (
        <div className="md:min-w-[450px] flex flex-col">
            {!selectedConversation ? (
                <NoChatSelected />
            ) : (
                <>
                    {/* Header */}
                    <div className="bg-primaryBlue px-4 py-2 mb-2">
                        <span className='label-text'>To:</span>{" "}
                        <span className='text-white font-bold'>{selectedConversation.firstName} {selectedConversation.lastName}</span>
                    </div>

                    <Messages />
                    <MessageInput />
                </>
            )}
        </div>
    );
};

const NoChatSelected = () => {
    return (
        <div className="flex items-center justify-center w-full h-full">
            <div className='px-4 text-center s,:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
                <p>Welcome 👋 John Doe</p>
                <p>Select a chat to start messaging</p>
                <TiMessages className='text-3xl md:text-6xl text-center text-primaryBlue' />
            </div>
        </div>
    );
};

export default MessageContainer
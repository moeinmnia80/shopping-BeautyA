import ChatIcon from "@assets/icons/ChatIcon";

const ChatBoxButton = () => {
  return (
    <>
      <button
        className={`fixed bottom-5 right-5 flex items-center text-white capitalize 
        bg-primary-700 border-2 border-background p-2 z-30`}
      >
        <ChatIcon className="w-7 h-7 " />
        <span className="hidden lg:inline-block font-extralight text-sm ml-2">
          online chat
        </span>
      </button>
    </>
  );
};

export default ChatBoxButton;

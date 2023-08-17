import { MdEmail } from "react-icons/md";

const MessageDetails = ({ messageData }) => {
  return (
    <div className="h-full flex flex-col">
      {messageData ? (
        <>
          <h1 className="text-[25px] font-bold">
            {messageData.senderName + messageData.id}
          </h1>

          <div className="text-[20px] flex flex-row justify-between">
            <div className="font-bold">{messageData.email}</div>
            <div className="font-semibold">{messageData.time}</div>
          </div>

          <div>
            {messageData.message.split("\n").map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>

          <button className="bg-primary-color text-white self-end justify-self-end flex items-center">
            <MdEmail />
            <span>Reply in Email</span>
          </button>
        </>
      ) : (
        <p>Message not found</p>
      )}
    </div>
  );
};

export default MessageDetails;

import { MdEmail } from "react-icons/md";

const MessageDetails = ({ messageData }) => {
  return (
    <>
      {messageData ? (
        <>
          <h1>{messageData.senderName + messageData.id}</h1>

          <div>
            <div>{messageData.email}</div>
            <div>{messageData.time}</div>
          </div>

          <div>{messageData.message}</div>

          <div>
            <button>
              <MdEmail />
              <span>Reply in Email</span>
            </button>
          </div>
        </>
      ) : (
        <p>Message not found</p>
      )}
    </>
  );
};

export default MessageDetails;

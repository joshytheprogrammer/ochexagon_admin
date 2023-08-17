import messagesArray from "@utils/messages";
import { MdEmail } from "react-icons/md";

const MessageView = ({ params }) => {
  // const message = messagesArray.find(msg => msg.id === Number(id));
  const messageList = messagesArray;
  const id = params.id;
  const message = messageList.find((msg) => msg.id === Number(id));

  return (
    <div>
      {message ? (
        <>
          <h1>{message.senderName + message.id}</h1>

          <div>
            <div>{message.email}</div>
            <div>{message.time}</div>
          </div>

          <div>{message.message}</div>

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
    </div>
  );
};

export default MessageView;

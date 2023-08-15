import messagesArray from "@utils/messages";

const Messages = () => {
  const messageList = messagesArray;

  return (
    <div className="h-max">
      <span>20 Messages</span>

      <input type="text" />

      <p>3 Unread Messages</p>

      <hr />

      <div>
        {messageList.map((message, index) => (
          <div key={index}>
            <div>
              <h2>{message.senderName}</h2>
              <span>{message.email}</span>
            </div>

            <div>
              <p>{message.message}</p>
              <span>{message.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Messages;

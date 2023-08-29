import MessageDetails from "@components/adminPanel/dashboard/messages/MessageDetails";
import messagesArray from "@utils/messages";

const MessageView = ({ params }) => {
  // const message = messagesArray.find(msg => msg.id === Number(id));
  const messageList = messagesArray;
  const id = params.id;
  const message = messageList.find((msg) => msg.id === Number(id));

  return (
    <>
      <MessageDetails messageData={message} />
    </>
  );
};

export default MessageView;

import messagesArray from "@utils/messages";

const Messages = () => {
  const messageList = messagesArray;

  const shortenText = (text, maxLength) => {
    let modifiedText = "";

    if (text.length > maxLength) {
      modifiedText = text.substring(0, maxLength) + "..."; 
    } else {
      modifiedText = text;
    }

    return modifiedText;
  }
  
  return (
    <div className="bg-white border w-full h-[90%] rounded-lg mt-6 py-4 px-8 first-letter:self-center justify-self-center overflow-hidden flex flex-col">
      <div className="flex flex-row justify-between">
        <span className="bg-primary-color text-white w-fit rounded-full px-5 py-1">20 Messages</span>
        <input type="text" className="bg-gray w-100px rounded-[4px] px-4 py-1" />
      </div>

      <p className="text-sm font-semibold my-2">3 Unread Messages</p>

      <hr />

      <div className="scrollable-content overflow-y-scroll h-[100%] my-4">
        {messageList.map((message, index) => (
          <div key={index} className="py-2 hover:bg-transparent-blue hover:border-l-4 border-primary-color px-4 rounded-[4px]">
            <div className="font-bold flex justify-between mb-2 ">
              <h2 className="text-lg">{message.senderName}</h2>
              <span className="text-sm">{message.email}</span>
            </div>

            <div className="font-semibold text-sm flex justify-between">
              <p>{shortenText(message.message, 150)}</p>
              <span>{message.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Messages;

import toDateTime, { toDate, toTime } from "@utils/firebase/utils";
import Link from "next/link";
import { MdEmail } from "react-icons/md";

const MessageDetails = ({ messageData, loading }) => {
  return (
    <>
      {loading && <div>Loading...</div>}
      {messageData && (
        <div className="w-full h-full flex flex-col justify-between scrollable-content overflow-y-auto px-2">
          <div>
            <div className="flex flex-row justify-between">
              <h1 className="text-lg mo-sm:text-[25px] font-bold">
                {messageData.senderName}
              </h1>

              <div className="font-semibold">
                {toDate(toDateTime(messageData.timestamp))} at{" "}
                {toTime(toDateTime(messageData.timestamp))}
              </div>
            </div>
            <div className="text-sm mo-sm:text-lg mt-4 mb-12">
              <div className="font-bold">{messageData.email}</div>
            </div>
            <div className="mt-2">
              {messageData.messageSent.split("\n").map((line, index) => (
                <p key={index} className="mb-4">
                  {line}
                </p>
              ))}
            </div>
          </div>

          <div className="w-full flex justify-end">
            <Link
              href={`mailto:${messageData.email}`}
              className="bg-primary-color text-white text-md font-semibold flex items-center rounded-md px-4 py-2"
            >
              <MdEmail className="mr-2" />
              <span>Reply in Email</span>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default MessageDetails;

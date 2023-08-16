import Messages from "@components/adminPanel/dashboard/Messages";

const Dashboard = () => {
  return (
    <div className="h-full w-full flex flex-col">
      <h1 className="font-bold text-[25px]">Messages</h1>
      <Messages />
    </div>
  );
}
 
export default Dashboard;
const DashboardLayout = ({ children }) => {
  return (
    <div className="h-full w-full flex flex-col">
      <h1 className="font-bold text-[25px]">Messages</h1>
      
      <div className="bg-white border w-full h-[90%] rounded-lg mt-6 py-4 px-8 first-letter:self-center justify-self-center overflow-hidden">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;

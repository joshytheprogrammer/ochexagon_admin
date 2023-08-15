import Header from '@components/adminPanel/Header';
import SidePanel from '@components/adminPanel/SidePanel';

const AdminPanelLayout = ({ children }) => {
  return (
    <div className="adminPanel w-full flex flex-col h-screen">
      <Header />

      <div className="flex flex-grow">
        <SidePanel />
        
        <main className="bg-blueish-white flex-grow">{children}</main>
      </div>
    </div>
  );
};

export default AdminPanelLayout;

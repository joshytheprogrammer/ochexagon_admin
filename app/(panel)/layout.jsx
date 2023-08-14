import Image from "next/image";
import { BiSolidDashboard } from 'react-icons/bi'

const AdminPanelLayout = ({ children }) => {
  return (
    <div className="adminPanel">
      <header>
        <Image
          src="/assets/logo.svg"
          alt="Company logo"
          width={60}
          height={61 / 2}
        />

        <div>
          <Image src="/assets/woman.jpg" alt="A woman" width={57} height={57} />

          <div>
            <h3>John Doe</h3>
            <p>Super Admin</p>
          </div>
        </div>
      </header>

      <aside>
        <h2>menu</h2>

        <div>
          <div>
            <div>
              <BiSolidDashboard />
              <span>Dashboard</span>
            </div>

            <div>
              <BiSolidDashboard />
              <span>Blog Posts</span>
            </div>

            <div>
              <BiSolidDashboard />
              <span>Testimonials</span>
            </div>
          </div>

          <div>
            <BiSolidDashboard />
            <span>Log Out</span>
          </div>
        </div>
      </aside>
      
      <main>{children}</main>
    </div>
  );
};

export default AdminPanelLayout;

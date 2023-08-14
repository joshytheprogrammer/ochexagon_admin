import Image from "next/image";

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
              <Image />
              <span></span>
            </div>
          </div>
          <div></div>
        </div>
      </aside>
      <main></main>
    </div>
  );
};

export default AdminPanelLayout;

import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-white w-full flex justify-between self-center px-4 lg:px-6 py-3">
      <Image
        src="/assets/logo.svg"
        alt="Company logo"
        width={60}
        height={61 / 2}
      />

      <div className="flex flex-row items-center">
        <Image
          src="/assets/woman.jpg"
          alt="A woman"
          width={40}
          height={57}
          className="rounded-[50%] aspect-square"
        />

        <div>
          <h3 className="text-primary-color font-semibold">John Doe</h3>
          <p>Super Admin</p>
        </div>
      </div>
    </header>
  );
};

export default Header;

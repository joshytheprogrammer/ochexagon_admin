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
    </header>
  );
};

export default Header;

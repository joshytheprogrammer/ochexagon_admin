import { RxHamburgerMenu } from "react-icons/rx";

const MenuBtn = ({ onClick }) => {
  return (
    <button className="text-[30px] lg:hidden" onClick={onClick}>
      <RxHamburgerMenu />
    </button>
  );
};

export default MenuBtn;

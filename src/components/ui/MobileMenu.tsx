import { Link } from "react-router-dom";
import { Dispatch, FC, SetStateAction } from "react";

import { menuItems } from "@constants/MenuItems";

import ChevronLeft from "@assets/icons/ChevronLeft";
import rightArrow from "@assets/images/rightArrow.png";

type MobileMenuProps = {
  isShow: boolean;
  setIsShow: (porps: boolean) => void;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const MobileMenu: FC<MobileMenuProps> = ({ isShow, setIsShow, setIsOpen }) => {
  const menuItemSelectHandler = () => {
    setIsOpen(false);
    setIsShow(false);
  };
  return (
    <>
      <ul
        className={`text-nowrap ${
          isShow ? "relative left-0" : "absolute top-8 left-[calc(100%+5rem)]"
        } duration-700`}
      >
        <li
          className={`flex items-center w-full font-bold text-lg capitalize py-3 pl-1 pr-3 `}
          onClick={() => setIsShow(false)}
        >
          <ChevronLeft style="w-5 h-5 mr-2" />
          <p className="mt-1">women skincare</p>
        </li>
        <Link
          to={`women-skincare`}
          className="menu-label__items flex items-center justify-between"
          onClick={menuItemSelectHandler}
        >
          shop all skincare
          <img src={`${rightArrow}`} alt="" />
        </Link>
        <li className="menu-label__items flex items-center justify-between">
          by category
          <img src={`${rightArrow}`} alt="" />
        </li>
        <li className="menu-label__items flex items-center justify-between">
          by skin condition
          <img src={`${rightArrow}`} alt="" />
        </li>
        <li className="menu-label__items flex items-center justify-between">
          collection
          <img src={`${rightArrow}`} alt="" />
        </li>
        {menuItems.special.map((item) => (
          <li
            key={item.id}
            className="menu-label__items text-!Gray-404040 font-normal"
          >
            {item.text}
          </li>
        ))}
      </ul>
    </>
  );
};

export default MobileMenu;

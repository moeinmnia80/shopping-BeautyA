import { FC } from "react";

import { menuItems } from "@constants/MenuItems";

import ChevronLeft from "@assets/icons/ChevronLeft";
import rightArrow from "@assets/images/rightArrow.png";

const WomenSkincare: FC<{
  isShow: boolean;
  setIsShow: (porps: boolean) => void;
}> = ({ isShow, setIsShow }) => {
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
        <li className="menu-label__items flex items-center justify-between">
          shop all skincare
          <img src={`${rightArrow}`} alt="" />
        </li>
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

export default WomenSkincare;

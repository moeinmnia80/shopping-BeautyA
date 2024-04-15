import { FC, MouseEvent, useState } from "react";

import rightArrow from "@assets/images/rightArrow.png";
import MobileMenu from "@components/ui/MobileMenu";

const Menu: FC<{ isOpen: boolean }> = ({ isOpen }) => {
  const [isShow, setIsShow] = useState(false);
  const [whichTab, setWhichTab] = useState("");

  const selectTabHandler = (event: MouseEvent<HTMLLIElement>) => {
    setWhichTab(`${event.currentTarget.textContent}`);
    setIsShow((prev) => !prev);
  };

  return (
    <>
      <section
        className={`fixed overflow-hidden ${
          isOpen ? "right-0" : "right-full"
        } top-20 w-full h-[calc(100dvh-5rem)] bg-background duration-500 p-8`}
      >
        <ul
          className={`w-full ${
            isShow ? "absolute -left-[calc(100%+4rem)]" : "relative left-0"
          } duration-700`}
        >
          <li
            className="menu-label__items flex justify-between items-center"
            onClick={(event) => selectTabHandler(event)}
          >
            women make up
            <img src={`${rightArrow}`} alt="" />
          </li>
          <li
            className="menu-label__items flex justify-between items-center"
            onClick={(event) => selectTabHandler(event)}
          >
            women skincare
            <img src={`${rightArrow}`} alt="" />
          </li>
          <li
            className="menu-label__items flex justify-between items-center"
            onClick={(event) => selectTabHandler(event)}
          >
            gifts & sets
            <img src={`${rightArrow}`} alt="" />
          </li>
          <li className="menu-label__items">branches</li>
          <li className="menu-label__items">our brand</li>
        </ul>
        {whichTab === "women skincare" && (
          <MobileMenu isShow={isShow} setIsShow={setIsShow} />
        )}
      </section>
    </>
  );
};

export default Menu;

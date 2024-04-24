import {
  Dispatch,
  FC,
  MouseEvent,
  SetStateAction,
  useEffect,
  useState,
} from "react";

import { hideOverflow } from "@utils/helper";
import MobileMenu from "@components/ui/MobileMenu";
import useClickOutside from "@hooks/useClickOutside";
import rightArrow from "@assets/images/rightArrow.png";

const Menu: FC<{
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}> = ({ isOpen, setIsOpen }) => {
  const [isShow, setIsShow] = useState(false);
  const [whichTab, setWhichTab] = useState("");
  const domeNode = useClickOutside<HTMLUListElement>(() => setIsOpen(false));

  hideOverflow(isOpen);
  useEffect(() => {
    !isOpen && setIsShow(false);
  }, [isOpen]);

  const selectTabHandler = (event: MouseEvent<HTMLLIElement>) => {
    setWhichTab(`${event.currentTarget.textContent}`);
    setIsShow((prev) => !prev);
  };

  return (
    <>
      <section
        className={`fixed overflow-auto ${
          isOpen ? "right-0" : "right-full"
        } top-20 w-full h-[calc(100dvh-5rem)] bg-background duration-500 p-8`}
        ref={domeNode}
      >
        <ul
          className={`w-full ${
            isShow ? "absolute -left-[calc(100%+4rem)]" : "relative left-0"
          } duration-700`}
        >
          <li className="menu-label__items flex justify-between items-center">
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
          <li className="menu-label__items flex justify-between items-center">
            gifts & sets
            <img src={`${rightArrow}`} alt="" />
          </li>
          <li className="menu-label__items">branches</li>
          <li className="menu-label__items">our brand</li>
        </ul>
        {whichTab === "women skincare" && (
          <MobileMenu
            isShow={isShow}
            setIsShow={setIsShow}
            setIsOpen={setIsOpen}
          />
        )}
      </section>
    </>
  );
};

export default Menu;

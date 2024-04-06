import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { navMenuItems } from "@constants/navMenuItems";

import SearchContainer from "@components/SearchContainer";

import LanguageIcon from "@assets/icons/LanguageIcon";
import SearchIcon from "@assets/icons/SearchIcon";
import logo from "@assets/images/logo.png";
import HambergerMenuIcon from "@assets/icons/HambergerMenuIcon";
import SubMenu from "@components/SubMenu";

const Header = () => {
  const [tab, setTab] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    isHover && document.body.classList.add(`overflow-hidden`);
    return () => {
      isHover && document.body.classList.remove(`overflow-hidden`);
    };
  }, [isHover]);

  return (
    <>
      <section
        className={`sticky top-0 flex items-center justify-center w-full h-20 lg:h-24 \
         bg-background border-b-1  border-Gray-DFDFDF overflow-hidden z-50`}
      >
        <nav className="lg:container flex justify-between items-end w-full h-full px-8">
          <div className="md:hidden flex w-1/4 z-10 py-5">
            <HambergerMenuIcon style="w-5 h-5 mr-2" />
            <SearchIcon style="w-5 h-5" />
          </div>
          <div
            className="relative w-max h-full  py-6"
            onClick={() => setTab("")}
          >
            <span className="absolute -top-2 -right-2 w-44 h-44 bg-primary-50 rounded-full blur-2xl" />
            <img
              src={logo}
              alt="beautya"
              className="relative w-full h-full object-contain select-none "
            />
          </div>
          <ul className="relative hidden md:flex items-end justify-center gap-x-14 h-full font-medium px-2">
            {navMenuItems.map((item) => (
              <Link
                to={"/"}
                key={item.id}
                className={`group flex items-end h-full header-list-text text-nowrap hover:text-primary-500 duration-300 py-4 ${
                  tab === item.name.toLowerCase() && "text-primary-500"
                }`}
                onClick={() => setTab(item.name.toLowerCase())}
                onMouseEnter={() => {
                  item.name === "Women Skincare"
                    ? setIsHover(true)
                    : setIsHover(false);
                }}
              >
                {item.name}
                {isHover && <SubMenu />}
              </Link>
            ))}
          </ul>
          <div className="flex items-center w-1/4 md:w-max justify-end py-5">
            <SearchIcon
              style="w-5 h-5 hidden lg:inline-block"
              onClick={() => setIsOpen(true)}
            />
            <span className="hidden lg:flex w-px h-5 bg-Gray-868686 mx-2" />
            <LanguageIcon style="w-5 h-5" />
            <div className="flex items-end ml-1.5">
              <p className="relative -bottom-[2px] text-sm md:text-[1rem] ">
                US
              </p>
              <span className="relative inline-block text-xs text-Gray-606060 ml-1">
                (EN)
              </span>
            </div>
          </div>
        </nav>
        <SearchContainer isOpen={isOpen} />
      </section>
    </>
  );
};

export default Header;

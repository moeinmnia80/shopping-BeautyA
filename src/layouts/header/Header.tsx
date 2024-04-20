import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { navMenuItems } from "@constants/navMenuItems";

import logo from "@assets/images/logo.png";
import SearchIcon from "@assets/icons/SearchIcon";
import LanguageIcon from "@assets/icons/LanguageIcon";
import HambergerMenuIcon from "@assets/icons/HambergerMenuIcon";
import SubMenu from "@components/HeaderSubMenu";
import XIcone from "@assets/icons/XIcone";
import MenuLabel from "@components/HeaderMenu";
import SearchModal from "@components/SearchModal";
import LocationModal from "@components/LocationModal";

const Header = () => {
  const [tab, setTab] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [changeLocation, setChangeLocation] = useState<{
    region: string;
    language: string;
    currency: string;
  }>({
    region: "US",
    language: "EN",
    currency: "USD",
  });

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
         bg-white border-b-1  border-Gray-DFDFDF overflow-hidden z-50`}
      >
        <nav className="lg:container flex justify-between items-end w-full h-full px-8">
          <div className="md:hidden flex w-1/4 z-10 py-5">
            {isOpen ? (
              <XIcone
                style="w-5 h-5 mr-2"
                onClick={() => setIsOpen((prev) => !prev)}
              />
            ) : (
              <HambergerMenuIcon
                style="w-5 h-5 mr-2"
                onClick={() => setIsOpen((prev) => !prev)}
              />
            )}
            <SearchIcon
              style="w-5 h-5"
              onClick={() => setIsSearching((prev) => !prev)}
            />
          </div>
          <div
            className="relative w-max h-full py-6"
            onClick={() => setTab("")}
          >
            <span className="absolute -top-2 -right-2 w-44 h-44 bg-primary-50 rounded-full blur-2xl" />
            <img
              src={logo}
              alt="beautya"
              className="relative w-full h-full object-contain select-none cursor-pointer"
            />
          </div>
          <ul className="relative hidden md:flex items-end justify-center gap-x-14 h-full font-medium px-2">
            {navMenuItems.map((item) => (
              <Link
                to={item.link}
                key={item.id}
                className={`group flex items-end h-full header-list-text text-nowrap \
                hover:text-primary-500 duration-300 py-4 ${
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
                {isHover && <SubMenu setIsHover={setIsHover} />}
              </Link>
            ))}
          </ul>
          <div className="flex items-center w-1/4 md:w-max justify-end py-5">
            <SearchIcon
              style="w-5 h-5 hidden lg:inline-block cursor-pointer"
              onClick={() => setIsSearching((prev) => !prev)}
            />
            <span className="hidden lg:flex w-px h-5 bg-Gray-868686 mx-2" />
            <div
              className="flex items-center cursor-pointer"
              onClick={() => setIsClicked((prev) => !prev)}
            >
              <LanguageIcon style="w-5 h-5" />
              <div className="flex items-end ml-1.5">
                <p className="relative -bottom-[2px] text-sm md:text-[1rem] ">
                  {changeLocation?.region}
                </p>
                <span className="relative inline-block text-xs text-Gray-606060 ml-1">
                  {`(${changeLocation?.language})`}
                </span>
              </div>
            </div>
          </div>
        </nav>
        <MenuLabel isOpen={isOpen} />
        <SearchModal
          isSearching={isSearching}
          setIsSearching={setIsSearching}
        />
        <LocationModal
          isClicked={isClicked}
          setIsClicked={setIsClicked}
          changeLocation={changeLocation}
          setChangeLocation={setChangeLocation}
        />
      </section>
    </>
  );
};

export default Header;

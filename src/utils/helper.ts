import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import ProductsType from "src/types/Products";

const changeDate = (date: string) => {
  const NEW_DATE = new Date(date);
  const YEAR = NEW_DATE.toLocaleDateString("en-us", { year: "numeric" });

  return `${NEW_DATE.toLocaleDateString("en-us", {
    month: "short",
    day: "numeric",
  }).concat(", ", YEAR)}`;
};

const scrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
};

const hideOverflow = (isActive: boolean) => {
  useEffect(() => {
    isActive && document.body.classList.add("overflow-hidden");
    return () => document.body.classList.remove("overflow-hidden");
  }, [isActive]);
};

const sortProductHandler = (
  target: string,
  products: ProductsType[],
  mainData: ProductsType[]
) => {
  switch (target) {
    case "expensive":
      return [...products.sort((a, b) => +b.price - +a.price)];
    case "cheap":
      return [...products.sort((a, b) => +a.price - +b.price)];
    default:
      return [...mainData];
  }
};

const tabChangeHandler = () => {
  useEffect(() => {
    const tabs = document.querySelectorAll(
      ".tab-btn"
    )! as NodeListOf<HTMLLIElement>;
    const tabLine = document.querySelector(".tab-line")! as HTMLDivElement;

    const tabHandler = (tab: HTMLLIElement) => {
      tabs.forEach((tab) => tab.classList.remove("active-tab"));
      tab.classList.add("active-tab");

      tabLine.style.width = tab.offsetWidth + "px";
      tabLine.style.left = tab.offsetLeft + "px";
    };
    tabs.forEach((tab) => tab.addEventListener("click", () => tabHandler(tab)));
    return () =>
      tabs.forEach((tab) =>
        tab.removeEventListener("click", () => tabHandler(tab))
      );
  }, []);
};

function geoFindMe() {
  // const status = document.querySelector("#status");
  const mapLink = document.querySelector("#map-link");

  // mapLink.href = "";
  // mapLink.textContent = "";

  function success(position: {
    coords: { latitude: number; longitude: number };
  }) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    // status.textContent = "";
    // mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    // mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
  }

  function error() {
    // status.textContent = "Unable to retrieve your location";
  }

  if (!navigator.geolocation) {
    // status.textContent = "Geolocation is not supported by your browser";
  } else {
    // status.textContent = "Locating…";
    navigator.geolocation.getCurrentPosition(success, error);
  }
}

export {
  changeDate,
  scrollToTop,
  hideOverflow,
  sortProductHandler,
  tabChangeHandler,
  geoFindMe,
};

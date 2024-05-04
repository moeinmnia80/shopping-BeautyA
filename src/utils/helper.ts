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
export { changeDate, scrollToTop, hideOverflow, sortProductHandler };

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

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

export { changeDate, scrollToTop, hideOverflow };

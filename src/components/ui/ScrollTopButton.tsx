import { useEffect, useState } from "react";

import ArrowTopIcon from "@assets/icons/ArrowTopIcon";

const ScrollTopButton = () => {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const checkScrollPosition = () => {
      scrollY > 800 ? setIsShow(true) : setIsShow(false);
    };
    window.addEventListener("scroll", checkScrollPosition);

    return () => window.removeEventListener("scroll", checkScrollPosition);
  }, []);

  return (
    <>
      {isShow && (
        <button
          className="fixed bottom-20 right-5 hidden lg:inline-block border-2 bg-background border-primary-500 p-2 z-20"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ArrowTopIcon className="w-7 h-7 text-primary-500" />
        </button>
      )}
    </>
  );
};

export default ScrollTopButton;

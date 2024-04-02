import ArrowTopIcon from "@assets/icons/ArrowTopIcon";
import { useEffect, useRef } from "react";

const ScrollTopButton = () => {
  const scrollTopButton = useRef<HTMLButtonElement | null>(null)!;

  useEffect(() => {
    console.log(scrollTopButton.current?.style.display);

    if (window.scrollY > 800) {
      scrollTopButton.current!.style.display = "inline-block";
    } else {
      scrollTopButton.current!.style.display = "none";
    }
  }, []);

  return (
    <>
      <button
        ref={scrollTopButton}
        className="fixed bottom-5 right-5 hidden lg:inline-block border-2 bg-white border-primary-500 p-2"
      >
        <ArrowTopIcon style="w-7 h-7 text-primary-500" />
      </button>
    </>
  );
};

export default ScrollTopButton;

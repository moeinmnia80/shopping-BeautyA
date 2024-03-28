import ArrowTopIcon from "@assets/icons/ArrowTopIcon";

const ScrollTopButton = () => {
  return (
    <>
      <button className="fixed bottom-5 right-5 hidden lg:inline-block border-2 bg-white border-primary-500 p-2">
        <ArrowTopIcon style="w-7 h-7 text-primary-500" />
      </button>
    </>
  );
};

export default ScrollTopButton;

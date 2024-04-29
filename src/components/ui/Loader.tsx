import { ComponentProps, FC, useEffect, useRef } from "react";

import loadingLogo from "@assets/images/loading.png";

type LoaderProps = { loading: boolean } & Omit<
  ComponentProps<"div">,
  "className"
>;

const Loader: FC<LoaderProps> = ({ loading, ...props }) => {
  const loaderBox = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    !loading && loaderBox!.current?.classList.add("fade-up");
  }, [loading]);
  return (
    <>
      <div
        className={`fixed top-0 left-0 flex items-center justify-center 
        w-full bg-primary-700 h-dvh z-50 duration-1000`}
        {...props}
        ref={loaderBox}
      >
        <img
          src={loadingLogo}
          alt=""
          className="w-full md:w-1/2 object-cover"
        />
      </div>
    </>
  );
};

export default Loader;

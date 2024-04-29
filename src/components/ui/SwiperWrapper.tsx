import {
  ComponentPropsWithoutRef,
  FC,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

import { Swiper } from "swiper/react";

import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/pagination";
import "swiper/css/navigation";

import lightRight from "@assets/images/right.png";
import darkRight from "@assets/images/rightArrow.png";
import lightLeft from "@assets/images/left.png";
import darkLeft from "@assets/images/leftArrow.png";

type SwiperWrapperProps = {
  boxClassName?: string;
  children: ReactNode;
  prevButtonStyle?: string;
  nextButtonStyle?: string;
  isOutSide?: boolean;
  isDarkArrow?: boolean;
} & ComponentPropsWithoutRef<typeof Swiper>;

const SwiperWrapper: FC<SwiperWrapperProps> = ({
  boxClassName,
  children,
  prevButtonStyle,
  nextButtonStyle,
  isOutSide = false,
  isDarkArrow = false,
  ...props
}) => {
  const [isUpdateRef, setIsUpdateRef] = useState(false);

  const navigationPrevRef = useRef<HTMLDivElement | null>(null);
  const navigationNextRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setIsUpdateRef(true);
  }, [isUpdateRef]);

  return (
    <div className={`relative ${boxClassName}`}>
      {isOutSide && (
        <div className={prevButtonStyle || "hidden"} ref={navigationPrevRef}>
          <img
            src={`${isDarkArrow ? darkLeft : lightLeft}`}
            alt="prev slide"
            className={props.direction === "vertical" ? "rotate-90" : ""}
          />
        </div>
      )}
      <Swiper
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: navigationNextRef.current,
          prevEl: navigationPrevRef.current,
        }}
        {...props}
      >
        {!isOutSide && (
          <div className={prevButtonStyle || "hidden"} ref={navigationPrevRef}>
            <img
              src={`${isDarkArrow ? darkLeft : lightLeft}`}
              alt="prev slide"
              className={props.direction === "vertical" ? "rotate-90" : ""}
            />
          </div>
        )}
        {children}
        {!isOutSide && (
          <div className={nextButtonStyle || "hidden"} ref={navigationNextRef}>
            <img
              src={`${isDarkArrow ? darkRight : lightRight}`}
              alt="next slide"
              className={props.direction === "vertical" ? "rotate-90" : ""}
            />
          </div>
        )}
      </Swiper>

      {isOutSide && (
        <div className={nextButtonStyle || "hidden"} ref={navigationNextRef}>
          <img
            src={`${isDarkArrow ? darkRight : lightRight}`}
            alt="next slide"
            className={props.direction === "vertical" ? "rotate-90" : ""}
          />
        </div>
      )}
    </div>
  );
};

export default SwiperWrapper;

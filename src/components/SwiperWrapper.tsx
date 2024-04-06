import {
  ComponentPropsWithoutRef,
  FC,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import { Swiper } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import lightRight from "@assets/images/right.png";
import darkRight from "../assets/images/rightArrow.png";
import lightLeft from "@assets/images/left.png";
import darkLeft from "../assets/images/leftArrow.png";

type SwiperWrapperProps = {
  children: ReactNode;
  prevButtonStyle: string;
  nextButtonStyle: string;
  isOutSide?: boolean;
  isDarkArrow?: boolean;
};

const SwiperWrapper: FC<
  SwiperWrapperProps & ComponentPropsWithoutRef<typeof Swiper>
> = ({
  children,
  prevButtonStyle,
  nextButtonStyle,
  isOutSide = false,
  isDarkArrow = false,
  ...props
}) => {
  const [isUpdateRef, setIsUpdateRef] = useState(false);

  const navigationPrevRef = useRef<HTMLSpanElement | null>(null);
  const navigationNextRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    setIsUpdateRef(true);
  }, [isUpdateRef]);

  return (
    <>
      {isOutSide && (
        <span className={prevButtonStyle} ref={navigationPrevRef}>
          <img src={`${isDarkArrow ? darkLeft : lightLeft}`} alt="prev slide" />
        </span>
      )}
      <Swiper
        speed={props?.speed && 400}
        spaceBetween={15}
        centeredSlides={props?.centeredSlides && true}
        autoplay={
          props?.autoplay && {
            delay: 5000,
            disableOnInteraction: false,
          }
        }
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: navigationNextRef.current,
          prevEl: navigationPrevRef.current,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        {...props}
      >
        {!isOutSide && (
          <span className={prevButtonStyle} ref={navigationPrevRef}>
            <img
              src={`${isDarkArrow ? darkLeft : lightLeft}`}
              alt="prev slide"
            />
          </span>
        )}
        {children}
        {!isOutSide && (
          <span className={nextButtonStyle} ref={navigationNextRef}>
            <img
              src={`${isDarkArrow ? darkRight : lightRight}`}
              alt="next slide"
            />
          </span>
        )}
      </Swiper>

      {isOutSide && (
        <span className={nextButtonStyle} ref={navigationNextRef}>
          <img
            src={`${isDarkArrow ? darkRight : lightRight}`}
            alt="next slide"
          />
        </span>
      )}
    </>
  );
};

export default SwiperWrapper;

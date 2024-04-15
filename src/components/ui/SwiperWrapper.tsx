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
import darkRight from "@assets/images/rightArrow.png";
import lightLeft from "@assets/images/left.png";
import darkLeft from "@assets/images/leftArrow.png";

type SwiperWrapperProps = {
  children: ReactNode;
  prevButtonStyle: string;
  nextButtonStyle: string;
  isOutSide?: boolean;
  isDarkArrow?: boolean;
} & ComponentPropsWithoutRef<typeof Swiper>;

const SwiperWrapper: FC<SwiperWrapperProps> = ({
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
    <>
      {isOutSide && (
        <div className={prevButtonStyle} ref={navigationPrevRef}>
          <img src={`${isDarkArrow ? darkLeft : lightLeft}`} alt="prev slide" />
        </div>
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
          <div className={prevButtonStyle} ref={navigationPrevRef}>
            <img
              src={`${isDarkArrow ? darkLeft : lightLeft}`}
              alt="prev slide"
            />
          </div>
        )}
        {children}
        {!isOutSide && (
          <div className={nextButtonStyle} ref={navigationNextRef}>
            <img
              src={`${isDarkArrow ? darkRight : lightRight}`}
              alt="next slide"
            />
          </div>
        )}
      </Swiper>

      {isOutSide && (
        <div className={nextButtonStyle} ref={navigationNextRef}>
          <img
            src={`${isDarkArrow ? darkRight : lightRight}`}
            alt="next slide"
          />
        </div>
      )}
    </>
  );
};

export default SwiperWrapper;

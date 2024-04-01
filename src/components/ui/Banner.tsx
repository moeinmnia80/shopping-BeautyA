import { FC } from "react";
import { SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

import { bannerGroup } from "@constants/bannerGroup";
import SwiperWrapper from "../SwiperWrapper";

const Banner: FC = () => {
  return (
    <>
      <section className="relative w-full h-full">
        <SwiperWrapper
          speed={400}
          spaceBetween={15}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          prevButtonStyle={`swiper-button-prev absolute top-0 left-0 hidden lg:flex h-[calc(100%-4rem)] w-20 bg-[#00000066] z-20`}
          nextButtonStyle={`swiper-button-next absolute top-0 right-0 hidden lg:flex h-[calc(100%-4rem)] w-20 bg-[#00000066] z-20`}
          className="mySwiper h-[70dvh] sm:h-full"
        >
          {bannerGroup.map((banner) => (
            <SwiperSlide key={banner.id}>
              <img
                src={banner.src}
                alt={banner.alt}
                className="w-full h-full object-cover object-[75%] brightness-50 select-none"
              />
            </SwiperSlide>
          ))}
        </SwiperWrapper>
        <h2
          className={`absolute bottom-[22vmax] md:bottom-[18vmax] left-1/2 -translate-x-1/2 \ 
          text-white banner__title font-bold capitalize z-20`}
        >
          unlock your natural glow{" "}
        </h2>
        <Link
          to={`/`}
          className={`absolute bottom-[16vmax] md:bottom-[14vmax] left-1/2 -translate-x-1/2 \ 
          banner__button-text text-white border-1 border-white px-8 py-2 z-20`}
        >
          Know More
        </Link>
      </section>
    </>
  );
};

export default Banner;

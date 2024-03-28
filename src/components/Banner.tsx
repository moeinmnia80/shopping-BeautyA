import { FC, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { bannerGroup } from "@constants/bannerGroup";
import { Link } from "react-router-dom";

const Banner: FC = () => {
  const [isUpdateRef, setIsUpdateRef] = useState(false);
  const navigationPrevRef = useRef<HTMLSpanElement | null>(null);
  const navigationNextRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    setIsUpdateRef(true);
  }, [isUpdateRef]);
  return (
    <>
      <section className="relative w-full h-full">
        <Swiper
          speed={400}
          spaceBetween={15}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={{
            nextEl: navigationNextRef.current,
            prevEl: navigationPrevRef.current,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper sm:h-full"
        >
          <span
            className="swiper-button-prev absolute top-0 left-0 hidden lg:flex h-[calc(100%-4rem)] w-20 bg-[#00000066] z-20"
            ref={navigationPrevRef}
          />
          {bannerGroup.map((banner) => (
            <SwiperSlide key={banner.id}>
              <img
                src={banner.src}
                alt={banner.alt}
                className="w-full h-full object-cover object-[75%] brightness-50 select-none"
              />
            </SwiperSlide>
          ))}
          <span
            className="swiper-button-next absolute top-0 right-0 hidden lg:flex h-[calc(100%-4rem)] w-20 bg-[#00000066] z-20"
            ref={navigationNextRef}
          />
        </Swiper>
        <h2 className="absolute bottom-[22vmax] md:bottom-[18vmax] left-1/2 -translate-x-1/2 text-white banner-title font-bold capitalize z-20">
          unlock your natural glow{" "}
        </h2>
        <Link
          to={`/`}
          className="absolute bottom-[16vmax] md:bottom-[14vmax] left-1/2 -translate-x-1/2 banner-button-text text-white border-1 border-white px-8 py-2 z-20"
        >
          Know More
        </Link>
      </section>
    </>
  );
};

export default Banner;

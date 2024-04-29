import { FC } from "react";
import { SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, FreeMode } from "swiper/modules";

import SwiperWrapper from "@components/ui/SwiperWrapper";
import { thumbnailPicture } from "@constants/thumbnailPicture";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

type ProductDetailSwiperProps = { status: "horizontal" | "vertical" };

const BREAK_POINT = {
  300: {
    slidesPerView: 3,
    spaceBetween: 25,
  },
  480: {
    slidesPerView: 4,
    spaceBetween: 25,
  },
  768: {
    slidesPerView: 5,
    spaceBetween: 25,
  },
  1024: {
    slidesPerView: 6,
    spaceBetween: 15,
  },
};

const ProductDetailSwiper: FC<ProductDetailSwiperProps> = ({ status }) => {
  // const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType>();

  return (
    <div className="flex flex-col-reverse row-start-3 lg:row-span-6 lg:flex-row gap-5 lg:col-start-1 lg:col-end-3 w-full h-full">
      <SwiperWrapper
        isOutSide
        isDarkArrow
        breakpoints={BREAK_POINT}
        // onSwiper={(swiper) => setThumbsSwiper(swiper)}
        spaceBetween={25}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        prevButtonStyle={`hidden lg:flex items-center justify-center absolute top-0 left-0
          w-full h-6 cursor-pointer bg-white border-1 border-Gray-DFDFDF z-10`}
        nextButtonStyle={`hidden lg:flex items-center justify-center absolute bottom-0 
          w-full h-6 cursor-pointer bg-white border-1 border-Gray-DFDFDF z-10`}
        boxClassName="thumb-gallery-swiper"
        direction={status}
        className=""
      >
        {thumbnailPicture.map((item) => (
          <SwiperSlide key={item.id} className="w-full h-full">
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </SwiperWrapper>
      <SwiperWrapper
        spaceBetween={10}
        navigation={true}
        // thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        boxClassName="product-picture-swiper"
        className=""
      >
        {thumbnailPicture.map((item) => (
          <SwiperSlide key={item.id} className="w-full h-full">
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </SwiperWrapper>
    </div>
  );
};

export default ProductDetailSwiper;

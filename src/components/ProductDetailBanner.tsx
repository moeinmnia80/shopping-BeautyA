import { ComponentProps, FC } from "react";
import { SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import SwiperWrapper from "@ui/SwiperWrapper";
import img1 from "@assets/images/productDetail1.png";
import img2 from "@assets/images/productDetail2.png";
import img3 from "@assets/images/productDetail3.png";
import img4 from "@assets/images/productDetail4.png";

type ProductDetailBannerProps = ComponentProps<"section">;

const imagesBanner = [
  { id: 1, src: img1, alt: "banner" },
  { id: 2, src: img2, alt: "banner" },
  { id: 3, src: img3, alt: "banner" },
  { id: 4, src: img4, alt: "banner" },
];

const descriptionsBanner = [
  {
    id: 1,
    title: "In just 1 week:",
    text: "it appears firmer, stronger and smoother.",
  },
  {
    id: 2,
    title: "In 3 weeks:",
    text: "2x improvement in the look or feel of skin elasticity",
  },
  {
    id: 3,
    title: "After 1 month:",
    text: "The skin looks firmer+60% | The skin looks denser +56%",
  },
];

const BREAK_POINT = {
  360: {
    slidesPerView: 1,
    spaceBetween: 15,
  },
  480: {
    slidesPerView: 2,
    spaceBetween: 15,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 15,
  },
  1024: {
    slidesPerView: 4,
    spaceBetween: 15,
  },
};

const ProductDetailBanner: FC<ProductDetailBannerProps> = ({ ...props }) => {
  return (
    <>
      <section {...props}>
        <div className="lg:container flex flex-col items-start md:items-center w-full text-white px-8">
          <SwiperWrapper
            spaceBetween={15}
            breakpoints={BREAK_POINT}
            modules={[Pagination, Navigation]}
            prevButtonStyle="hidden"
            nextButtonStyle="hidden"
            boxClassName="w-full"
            className="product-detail-banner__swiper w-full h-full md:mb-5"
          >
            {imagesBanner.map((item) => (
              <SwiperSlide key={`${item.id}`} className="w-full">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full object-cover"
                />
              </SwiperSlide>
            ))}
          </SwiperWrapper>
          {descriptionsBanner.map((item) => (
            <p className="md:gap-2 text__md font-extralight" key={item.id}>
              <span className="font-bold text-nowrap">{item.title}</span>
              {item.text}
            </p>
          ))}
        </div>
      </section>
    </>
  );
};

export default ProductDetailBanner;

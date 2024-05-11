import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import SwiperWrapper from "./ui/SwiperWrapper";
import NewProducts from "@components/NewProducts";
import { GET_NEW_PRODUCTS } from "@graphql/queries";

const BREAK_POINT = {
  360: {
    slidesPerView: 2,
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

const ProductDetailRecommanded = () => {
  const { data } = useQuery<{ newProducts: NewProducts[] }>(GET_NEW_PRODUCTS);
  return (
    <>
      <section className="lg:container flex flex-col items-center h-full pt-12 px-8">
        <h3 className="text__2xl text-center text-black font-bold capitalize mb-10">
          recommended skincare routine
        </h3>
        <SwiperWrapper
          isOutSide
          isDarkArrow
          breakpoints={BREAK_POINT}
          modules={[Pagination, Navigation]}
          prevButtonStyle={`hidden md:flex items-center justify-center absolute top-1/2 -translate-y-1/2 left-0
          -translate-x-5 w-10 h-10 cursor-pointer bg-white border-1 border-Gray-DFDFDF z-10`}
          nextButtonStyle={`hidden md:flex items-center justify-center absolute right-0 translate-x-5 top-1/2 
          -translate-y-1/2 w-10 h-10 cursor-pointer bg-white border-1 border-Gray-DFDFDF z-10`}
          boxClassName="relative w-full h-full"
          className="swiper-new-product w-full h-!max"
        >
          {data?.newProducts?.map((product) => (
            <SwiperSlide
              key={`${product.slug}`}
              className={`flex flex-col items-start justify-between w-1/2 gap-y-5 md:w-1/3 xl:w-1/4 \
          bg-white border-1 border-Gray-DFDFDF cursor-pointer`}
            >
              <Link to={"/women-skincare"}>
                <img
                  src={`${product.productcImage.url}`}
                  alt=""
                  className="w-full h-full object-cover self-center"
                />
                <div className="flex flex-col gap-y-5 bg-white p-5">
                  <h4 className="text__lg text-primary-500 font-bold">
                    {product.title}
                  </h4>
                  <p className="text__md font-light">{product.description}</p>
                  <p className="self-start">${product.price}</p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </SwiperWrapper>
      </section>
    </>
  );
};

export default ProductDetailRecommanded;

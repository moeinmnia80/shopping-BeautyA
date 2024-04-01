import { FC } from "react";
import { useQuery } from "@apollo/client";
import { SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import { GET_PRODUCTS } from "@graphql/queries";

import "swiper/css/navigation";
import SwiperWrapper from "./SwiperWrapper";

type Products = {
  title: string;
  description: string;
  price: string;
  slug: string;
  date: Date;
  productcImage: {
    url: string;
  };
};

const BREAK_POINT = {
  300: {
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

const BestSellerProduucts: FC = () => {
  const { loading, data } = useQuery<{ product: Products[] }>(GET_PRODUCTS);

  return (
    <>
      <section className="lg:container relative flex flex-col items-center justify-center mt-12 px-8 sm:p-0">
        {!loading ? (
          <>
            <h2 className="text-2xl font-bold mb-6">our Best Sellers</h2>
            <SwiperWrapper
              isOutSide={true}
              spaceBetween={15}
              loop={true}
              breakpoints={BREAK_POINT}
              modules={[Pagination, Navigation]}
              prevButtonStyle={`left-arrow hidden md:inline-block absolute top-1/2 -translate-y-1/2 left-0 \ 
              -translate-x-5 w-10 h-10 cursor-pointer border-1 border-Gray-DFDFDF z-10`}
              nextButtonStyle={`right-arrow hidden md:inline-block absolute right-0 translate-x-5 top-1/2 \ 
              -translate-y-1/2 w-10 h-10 cursor-pointer bg-white border-1 border-Gray-DFDFDF z-10`}
              className="swiper-best-seller h-max py-1"
            >
              {data?.product?.map((product) => (
                <SwiperSlide
                  key={`${product.slug}`}
                  className={`flex flex-col w-full h-max  border-1 \
                     border-Gray-DFDFDF cursor-pointer`}
                >
                  <img
                    src={`${product.productcImage.url}`}
                    alt="product"
                    className="w-full"
                  />
                  <div className="flex flex-col gap-y-5 bg-white p-5">
                    <h4 className="best-seller-product__title text-primary-500 font-bold">
                      {product.title}
                    </h4>
                    <p className="best-seller-product__text">
                      {product.description}
                    </p>
                    <p className=" self-start">${product.price}</p>
                  </div>
                </SwiperSlide>
              ))}
            </SwiperWrapper>
          </>
        ) : (
          <div>Loading...</div>
        )}
      </section>
    </>
  );
};

export default BestSellerProduucts;

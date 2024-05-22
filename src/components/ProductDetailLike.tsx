import { useQuery } from "@apollo/client";
import { SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import SwiperWrapper from "@ui/SwiperWrapper";
import { GET_PRODUCTS } from "@graphql/queries";
import SkeletonLoader from "@ui/SkeletonLoader";

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

const ProductDetailLike = () => {
  const { loading, data } = useQuery<{ product: Products[] }>(GET_PRODUCTS);

  return (
    <>
      <section className="w-full bg-primary-25 py-12">
        <div className="lg:container px-8">
          <h4 className="text__2xl text-center text-black font-bold capitalize mb-10">
            you may also like
          </h4>
          <SwiperWrapper
            isOutSide={true}
            isDarkArrow={true}
            spaceBetween={15}
            breakpoints={BREAK_POINT}
            modules={[Pagination, Navigation]}
            prevButtonStyle={`hidden md:flex items-center justify-center absolute top-1/2 -translate-y-1/2 left-0 \
              -translate-x-5 w-10 h-10 cursor-pointer bg-white border-1 border-Gray-DFDFDF z-10`}
            nextButtonStyle={`hidden md:flex items-center justify-center absolute right-0 translate-x-5 top-1/2 \
              -translate-y-1/2 w-10 h-10 cursor-pointer bg-white border-1 border-Gray-DFDFDF z-10`}
            className="swiper-best-seller h-max py-1"
          >
            {!loading ? (
              data?.product?.map((product) => (
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
                    <h4 className="text__xl text-primary-500 font-bold">
                      {product.title}
                    </h4>
                    <p className="text__md">{product.description}</p>
                    <p className="self-start">${product.price}</p>
                  </div>
                </SwiperSlide>
              ))
            ) : (
              <>
                <SwiperSlide className="flex w-full">
                  <SkeletonLoader className="w-full" imageClassName="h-96" />
                </SwiperSlide>
                <SwiperSlide className="flex w-full">
                  <SkeletonLoader className="w-full" imageClassName="h-96" />
                </SwiperSlide>
                <SwiperSlide className="flex w-full">
                  <SkeletonLoader className="w-full" imageClassName="h-96" />
                </SwiperSlide>
                <SwiperSlide className="flex w-full">
                  <SkeletonLoader className="w-full" imageClassName="h-96" />
                </SwiperSlide>
              </>
            )}
          </SwiperWrapper>
        </div>
      </section>
    </>
  );
};

export default ProductDetailLike;

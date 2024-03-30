import { FC, useEffect, useRef, useState } from "react";
import { useQuery } from "@apollo/client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import { GET_PRODUCTS } from "@graphql/queries";

import "swiper/css/navigation";

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

const BestSellerProduucts: FC = () => {
  const { loading, data } = useQuery<{ product: Products[] }>(GET_PRODUCTS);
  const [isUpdateRef, setIsUpdateRef] = useState(false);
  const navigationPrevRef = useRef<HTMLSpanElement | null>(null);
  const navigationNextRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    setIsUpdateRef(true);
  }, [isUpdateRef]);

  return (
    <>
      <section className="container relative flex flex-col items-center justify-center mt-12 px-8 sm:p-0">
        {!loading ? (
          <>
            <h2 className="text-2xl font-bold mb-6">our Best Sellers</h2>
            <span
              className="left-arrow hidden md:inline-block absolute top-1/2 -translate-y-1/2 left-0 -translate-x-5 w-10 h-10 cursor-pointer border-1 border-Gray-DFDFDF z-10"
              ref={navigationPrevRef}
            />
            <Swiper
              slidesPerView={4}
              spaceBetween={15}
              loop={true}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
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
              }}
              navigation={{
                nextEl: navigationNextRef.current,
                prevEl: navigationPrevRef.current,
              }}
              modules={[Pagination, Navigation]}
              className="swiper-best-seller h-max"
            >
              {data?.product?.map((product) => (
                <>
                  <SwiperSlide
                    key={`${product.slug}`}
                    className="flex flex-col items-center justify-between gap-y-5 w-full h-max border-1 border-Gray-DFDFDF p-5 cursor-pointer"
                  >
                    <img src={`${product.productcImage.url}`} alt="" />
                    <h4 className="product-title text-primary-500 font-bold">
                      {product.title}
                    </h4>
                    <p className="product-text">{product.description}</p>
                    <p className=" self-start">${product.price}</p>
                  </SwiperSlide>
                </>
              ))}
            </Swiper>
            <span
              className="right-arrow hidden md:inline-block absolute right-0 translate-x-5 top-1/2 -translate-y-1/2 w-10 h-10 cursor-pointer bg-white border-1 border-Gray-DFDFDF z-10"
              ref={navigationNextRef}
            />
          </>
        ) : (
          <div>Loading...</div>
        )}
      </section>
    </>
  );
};

export default BestSellerProduucts;

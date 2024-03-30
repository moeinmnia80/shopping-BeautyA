import { FC, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { useQuery } from "@apollo/client";

import "swiper/css/navigation";

import newInBanner from "@assets/images/newInBanner.png";
import { GET_NEW_PRODUCTS } from "@graphql/queries";

type NewProducts = {
  title: string;
  description: string;
  price: string;
  slug: string;
  date: Date;
  productcImage: {
    url: string;
  };
};

const NewProducts: FC = () => {
  const [isUpdateRef, setIsUpdateRef] = useState(false);
  const [isClicked, setIsClicked] = useState(0);
  const navigationPrevRef = useRef<HTMLSpanElement | null>(null);
  const navigationNextRef = useRef<HTMLSpanElement | null>(null);
  useEffect(() => {
    setIsUpdateRef(true);
  }, [isUpdateRef]);

  const { data } = useQuery<{ newProducts: NewProducts[] }>(GET_NEW_PRODUCTS);
  console.log(isClicked);

  return (
    <>
      <section className="lg:container relative flex flex-col items-center h-max bg-primary-750 p-5 md:py-10 md:pb-24 md:px-24 my-14 ">
        <h3 className="new-product-title text-white font-bold mb-6">New In</h3>
        <span
          className={`left-arrow hidden ${
            isClicked ? `md:inline-block` : ``
          } absolute top-1/2 -translate-y-1/2 left-24 \
           -translate-x-5 w-10 h-10 cursor-pointer border-1 border-Gray-DFDFDF z-10`}
          ref={navigationPrevRef}
        />
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={15}
          pagination={{
            clickable: true,
          }}
          navigation={{
            nextEl: navigationNextRef.current,
            prevEl: navigationPrevRef.current,
          }}
          modules={[Pagination, Navigation]}
          onSlideNextTransitionStart={() => setIsClicked((prev) => ++prev)}
          onSlidePrevTransitionStart={() => setIsClicked((prev) => --prev)}
          className="swiper-new-product w-full h-max"
        >
          <SwiperSlide className="flex flex-col gap-y-5 w-full md:w-2/3 lg:w-1/2">
            <img
              src={`${newInBanner}`}
              alt="new product banner"
              className="w-full object-cover"
            />
            <h4 className="new-product-banner-title text-primary-100">
              Beautya La Mousse Off/On Foaming Cleaner
            </h4>
            <p className="new-product-banner-text text-white">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis en im velit mollit.
            </p>
          </SwiperSlide>
          {data?.newProducts?.map((product) => (
            <>
              <SwiperSlide
                key={`${product.slug}`}
                className={`flex flex-col items-start justify-between w-full gap-y-5 md:w-1/3 xl:w-1/4 h-max \
                bg-white border-1 border-Gray-DFDFDF p-5 cursor-pointer`}
              >
                <img
                  src={`${product.productcImage.url}`}
                  alt=""
                  className="self-center"
                />
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
          className={`right-arrow hidden md:inline-block absolute right-24 translate-x-5 top-1/2 
          -translate-y-1/2 w-10 h-10 cursor-pointer bg-white border-1 border-Gray-DFDFDF z-10`}
          ref={navigationNextRef}
        />
      </section>
    </>
  );
};

export default NewProducts;

import { FC, useState } from "react";
import { SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { useQuery } from "@apollo/client";

import "swiper/css/navigation";

import newInBanner from "@assets/images/newInBanner.png";
import { GET_NEW_PRODUCTS } from "@graphql/queries";
import SwiperWrapper from "./SwiperWrapper";

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
  const [isClicked, setIsClicked] = useState(0);

  const { data } = useQuery<{ newProducts: NewProducts[] }>(GET_NEW_PRODUCTS);

  return (
    <>
      <section className="flex flex-col items-center h-max bg-primary-750 px-8 py-10 sm:px-0 my-14 ">
        <h3 className="new-product-title text-white font-bold mb-6">New In</h3>
        <div className="container relative flex">
          <SwiperWrapper
            isOutSide={true}
            slidesPerView={"auto"}
            spaceBetween={15}
            modules={[Pagination, Navigation]}
            onSlideNextTransitionStart={() => setIsClicked((prev) => ++prev)}
            onSlidePrevTransitionStart={() => setIsClicked((prev) => --prev)}
            prevButtonStyle={`left-arrow hidden ${
              isClicked ? `md:inline-block` : ``
            } absolute top-1/2 -translate-y-1/2 left-0 \
           -translate-x-5 w-10 h-10 cursor-pointer border-1 border-Gray-DFDFDF z-10`}
            nextButtonStyle={`right-arrow hidden md:inline-block absolute right-0 translate-x-5 top-1/2 
            -translate-y-1/2 w-10 h-10 cursor-pointer bg-white border-1 border-Gray-DFDFDF z-10`}
            className="swiper-new-product w-full h-!max"
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
                  className={`flex flex-col items-start justify-between w-1/2 sm:w-full gap-y-5 md:w-1/3 xl:w-1/4 h-max \
                bg-white border-1 border-Gray-DFDFDF p-5 cursor-pointer`}
                >
                  <img
                    src={`${product.productcImage.url}`}
                    alt=""
                    className="w-full sm:w-full self-center"
                  />
                  <h4 className="product-title text-primary-500 font-bold">
                    {product.title}
                  </h4>
                  <p className="product-text">{product.description}</p>
                  <p className=" self-start">${product.price}</p>
                </SwiperSlide>
              </>
            ))}
          </SwiperWrapper>
        </div>
      </section>
    </>
  );
};

export default NewProducts;

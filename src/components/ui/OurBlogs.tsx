import { FC } from "react";
import { Pagination, Navigation } from "swiper/modules";

import { useQuery } from "@apollo/client";
import { GET_BLOGS } from "@graphql/queries";

import { changeDate } from "@utils/helper";
import SwiperWrapper from "@components/SwiperWrapper";
import { SwiperSlide } from "swiper/react";
import SkeletonLoader from "./SkeletonLoader";

type Blog = {
  title: string;
  about: string;
  author: string;
  date: string;
  description: string;
  image: {
    url: string;
  };
  slug: string;
};

const BREAK_POINT = {
  300: {
    slidesPerView: 1,
    spaceBetween: 15,
  },
  768: {
    slidesPerView: 2,
    spaceBetween: 15,
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: 15,
  },
};
const OurBlogs: FC = () => {
  const { loading, data } = useQuery<{ blogs: Blog[] }>(GET_BLOGS)!;

  return (
    <>
      <section className="lg:container relative flex flex-col items-center justify-center px-8">
        <h3 className="our-blog__title">Our Blog</h3>
        <SwiperWrapper
          spaceBetween={15}
          breakpoints={BREAK_POINT}
          modules={[Pagination, Navigation]}
          prevButtonStyle="hidden"
          nextButtonStyle="hidden"
          className="our-blog-swiper h-full mt-6"
        >
          {loading ? (
            data?.blogs.map((blog) => (
              <SwiperSlide
                key={`${blog.slug}`}
                className="w-full border-1 border-Gray-DFDFDF"
              >
                <img
                  src={`${blog.image.url}`}
                  alt={blog.about}
                  className="w-full object-cover"
                />
                <div className="flex flex-col gap-3 bg-white p-5">
                  <div>
                    <h4 className="our-blog-post__title">{blog.title}</h4>
                    <p className="our-blog-post__info text-Gray-606060">
                      {blog.about} | {blog.author} | {changeDate(blog.date)}
                    </p>
                  </div>
                  <p className="truncate-overflow our-blog__button-text">
                    {blog.description}
                  </p>
                </div>
              </SwiperSlide>
            ))
          ) : (
            <>
              <SwiperSlide>
                <SkeletonLoader isBlog={true} />
              </SwiperSlide>
              <SwiperSlide>
                <SkeletonLoader isBlog={true} />
              </SwiperSlide>
              <SwiperSlide>
                <SkeletonLoader isBlog={true} />
              </SwiperSlide>
            </>
          )}
          {/* </ul> */}
        </SwiperWrapper>
        <button className="md:absolute md:top-6 md:right-12 our-blog__button-text md:capitalize text-primary-500 mt-4 md:mt-0">
          view all
        </button>
      </section>
    </>
  );
};

export default OurBlogs;

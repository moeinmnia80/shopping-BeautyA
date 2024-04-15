import brandBanner from "@assets/images/brandPicture.png";

const OurBrand = () => {
  return (
    <>
      <section className="lg:container px-0 sm:px-8 my-14">
        <div className="relative flex flex-col-reverse md:flex-row md:bg-primary-750">
          <div className="flex flex-col items-start justify-center gap-3 text-white px-8 md:pl-24 md:py-8 md:pr-10">
            <h3
              className={`our-brand__title absolute top-12 left-1/2 -translate-x-1/2
              md:relative md:top-0 md:left-0 md:translate-x-0`}
            >
              Our Brand
            </h3>
            <p className="our-brand__text text-black md:text-white md:font-light mt-32 md:mt-0">
              We believe that beauty thrives in diversity and discovery. Our
              purpose is to expand the way the world sees beauty by empowering
              the Extraordinary in each of us.
            </p>
            <button
              className={`our-brand__button self-center md:self-auto text-primary-500 \
            md:text-white font-light border-2 border-primary-500 md:border-white px-8 py-2 `}
            >
              Discover More
            </button>
          </div>
          <div className="flex justify-center w-full bg-primary-750 md:w-2/3 px-8 sm:px-0 ">
            <img
              src={`${brandBanner}`}
              alt="our brand"
              className="relative top-28 md:top-0 w-60 h-56 md:w-full md:h-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default OurBrand;

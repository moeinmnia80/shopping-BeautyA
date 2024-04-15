import { FC } from "react";

import offerBanner from "@assets/images/specialOffersBanner.png";
import { specialOfferTexts } from "@constants/specialOfferTexts";

const SpecialOffers: FC = () => {
  return (
    <>
      <section className="lg:bg-primary-25 ">
        <div
          className={`lg:container relative flex flex-col md:flex-row items-center 
          justify-center gap-6 pt-14 lg:px-8 px-0 md:pt-0 mt-14`}
        >
          <div className="w-full md:w-1/2 h-full">
            <img
              src={`${offerBanner}`}
              alt="special offers"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col gap-y-3 md:gap-2 w-full md:w-1/2 px-8 lg:pr-0">
            <h3 className="special-offer__title absolute top-0 left-1/2 -translate-x-1/2 md:relative">
              Special Offers
            </h3>
            {specialOfferTexts.map((text) => (
              <p key={text.id} className={text.className}>
                {text.text}
              </p>
            ))}
            <button
              className={`text-primary-500 md:text-white bg-transparent border-2 border-primary-500
              md:bg-primary-500 px-8 py-3 self-center md:self-end md:capitalize`}
            >
              find branches
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default SpecialOffers;

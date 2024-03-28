import imgAds from "@assets/images/ads1.png";
import barcode from "@assets/images/barcode.png";
const FirstSkinTypeBanner = () => {
  return (
    <>
      <section className="sm:container relative flex flex-wrap-reverse w-full h-max mt-20">
        <h3 className="absolute -top-10 left-1/2 -translate-x-1/2 lg:hidden text-nowrap skin-type text-black font-bold">
          Virtual Skincare Analysis
        </h3>
        <div className="relative flex flex-col gap-y-3 w-full items-start justify-between lg:w-1/2 lg:bg-primary-750 px-8 lg:p-8 lg:pl-28">
          <h3 className="hidden lg:inline-block skin-type-title  text-white font-bold">
            NEW Virtual Skincare Analysis
          </h3>
          <p className="skin-type-text lg:font-extralight text-black lg:text-white mt-6 lg:m-0">
            Looking for a full skincare routine? Our NEW Virtual Skincare
            Analysis Tool evaluates your skin and provides the most personalized
            recommendations.{" "}
          </p>
          <p className="hidden lg:inline-block skin-type-title__second font-bold text-white">
            Scan with your phone to get started
          </p>
          <p className="hidden lg:inline-block skin-type-text font-extralight text-white">
            Or
          </p>
          <div className="flex gap-x-4 w-full">
            <button className="w-1/2 lg:w-max text-primary-500 lg:text-white skin-type-button-text lg:capitalize lg:border-2 lg:border-white lg:px-8 py-2">
              answer a few questions
            </button>
            <button className="w-1/2 lg:hidden text-white skin-type-button-text lg:capitalize bg-primary-500 lg:px-8 py-2">
              take a selfie
            </button>
          </div>
          <img
            src={`${barcode}`}
            alt="barcode"
            className="hidden lg:inline-block absolute bottom-5 right-5"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <img
            src={`${imgAds}`}
            alt="ads"
            className="w-full h-full object-contain sm:object-cover object-center"
          />
        </div>
      </section>
    </>
  );
};

export default FirstSkinTypeBanner;

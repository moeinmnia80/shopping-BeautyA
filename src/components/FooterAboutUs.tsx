import { useState } from "react";
import { Link } from "react-router-dom";

import CheckBox from "@components/ui/CheckBox";

import { aboutUs } from "@constants/aboutUs";
import { products } from "@constants/products";
import footerLogo from "@assets/images/footerLogo.png";

const AboutUs = () => {
  const [isAcceptPolicy, setIsAcceptPolicy] = useState(false);

  return (
    <>
      <section className="relative bg-primary-750 overflow-hidden">
        <div className="lg:container relative flex flex-wrap justify-between gap-10 md:gap-x-0  lg:gap-0 text-white p-8 md:py-20">
          <div className="flex flex-col gap-2 w-full md:w-1/2 lg:w-1/4">
            <h4 className="font-bold capitalize mb-3">how can we help?</h4>
            {aboutUs.map((item) => (
              <Link
                key={item.id}
                to={"/"}
                className="about-us__text font-extralight"
              >
                {item.text}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-2 w-full md:w-1/2 lg:w-1/4">
            <h4 className="font-bold mb-3">Products</h4>
            {products.map((product) => (
              <Link
                key={product.id}
                to={`/`}
                className="about-us__text font-extralight"
              >
                {product.text}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-2 w-full lg:w-1/2 z-20">
            <h4 className="capitalize mb-3">keep in touch with beautya</h4>
            <p className="about-us__text font-extralight">
              Join the Beautya newsletter and be first to hear about news,
              offers and skincare advice.
            </p>
            <form
              onSubmit={(event) => {
                event.preventDefault();
              }}
              className="flex flex-col sm:flex-row gap-5"
            >
              <input
                type="text"
                placeholder="Email Address"
                name="email"
                className={`w-full p-2 bg-transparent border-b-2 border-Gray-CBCBCB placeholder:text-sm \
                placeholder:font-extralight placeholder:text-Gray-CBCBCB outline-none`}
              />
              <CheckBox
                htmlFor="1"
                labelClassName="inline-flex sm:hidden items-start about-us__text font-extralight select-none"
                onClick={() => setIsAcceptPolicy((prev) => !prev)}
                name="policy"
              >
                I agree to Beautya’s Terms and Conditions and Privacy and
                Policy.
              </CheckBox>
              <button
                type="submit"
                className={`text-Gray-CBCBCB font-extralight border-2 border-Gray-CBCBCB w-full sm:w-max p-2 px-4
                disabled:opacity-60 disabled:cursor-not-allowed`}
                disabled={!isAcceptPolicy}
              >
                Subscribe
              </button>
            </form>
            <CheckBox
              htmlFor="2"
              labelClassName={`hidden sm:inline-flex items-start about-us__label about-us__text \
              font-extralight select-none mt-3 cursor-pointer`}
              onClick={() => setIsAcceptPolicy((prev) => !prev)}
              name="policy"
            >
              By submitting your email, you agree to receive advertising emails
              from Beautya. Please review our Privacy Policy, which includes our
              Financial Incentive Notice for CA residents.
            </CheckBox>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-56 h-max">
          <img
            src={`${footerLogo}`}
            alt="beautya"
            className="w-full h-full object-cover"
          />
        </div>
      </section>
    </>
  );
};

export default AboutUs;

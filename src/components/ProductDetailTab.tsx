import { FC, useEffect, useState } from "react";

import { tabChangeHandler } from "@utils/helper";
import { ProductDetailType } from "src/types/Products";
import Accordion, { AccordionItem } from "@ui/Accordion";

type ProductDetailTabProps = {
  data?: {
    skincareProduct: ProductDetailType;
  };
};

type productDetailPartsType = {
  id:
    | "details"
    | "howToApply"
    | "ingredient"
    | "whatMakesItAdvance"
    | "specification";
  title: string;
};

const productDetailParts: productDetailPartsType[] = [
  { id: "details", title: "Product Details" },
  { id: "howToApply", title: "How To Apply" },
  { id: "ingredient", title: "Ingredient" },
  { id: "whatMakesItAdvance", title: "What Makes It Advance" },
  { id: "specification", title: "Product Specification" },
];

const ProductDetailTab: FC<ProductDetailTabProps> = ({ data }) => {
  const [status, setStatus] = useState(false);
  tabChangeHandler();
  useEffect(() => {
    const checkWindowWidth = () => {
      window.innerWidth < 768 ? setStatus(true) : setStatus(false);
    };
    window.addEventListener("resize", checkWindowWidth);
    return () => window.removeEventListener("resize", checkWindowWidth);
  }, [window.innerWidth]);

  return (
    <>
      <div className="w-full  py-12">
        <ul
          className={`relative flex justify-between gap-10 w-full font-bold border-b-1 
          border-Gray-606060 py-2 mt-5 overflow-x-scroll overflow-y-hidden`}
        >
          {productDetailParts.map((item) => (
            <li
              key={item.id}
              className={`tab-btn w-max cursor-pointer ${
                item.id === "details" ? "active-tab" : ""
              }`}
            >
              {item.title}
            </li>
          ))}
          <div
            className={`tab-line absolute bottom-0 translate-y-[1px] left-0 w-[112px] h-[2px] bg-primary-500 duration-500`}
          />
        </ul>
        <div className="bg-white">
          <Accordion>
            {productDetailParts.map((item) => (
              <AccordionItem
                icon="plus"
                key={item.id}
                value={item.id}
                minHeight={status ? 0 : "3rem"}
                trigger={item.title}
                triggerClassName={`text__lg font-bold`}
                className={`relative flex flex-col gap-2 border-b-1 border-Gray-DFDFDF px-8 pt-4 ${
                  status ? "" : "pb-14"
                }`}
                togglerButton={!status}
              >
                <div
                  dangerouslySetInnerHTML={{
                    __html: data?.skincareProduct[item.id].html || "",
                  }}
                  className="text__md text-black font-light"
                />
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default ProductDetailTab;

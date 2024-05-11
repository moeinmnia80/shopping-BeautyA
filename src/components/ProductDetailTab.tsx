import { FC } from "react";

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
  tabChangeHandler();

  return (
    <>
      <div className="w-full  py-12">
        <ul
          className={`relative flex justify-between gap-10 w-full font-bold border-b-1 
          border-Gray-606060 py-2 mt-5 overflow-x-scroll overflow-y-hidden`}
        >
          <li className={`tab-btn cursor-pointer active-tab`}>
            Product Details
          </li>
          <li className={`tab-btn w-max cursor-pointer`}>How To Apply</li>
          <li className={`tab-btn w-max cursor-pointer`}>Ingredient</li>
          <li className={`tab-btn w-max cursor-pointer`}>
            What Makes In Advance
          </li>
          <li className={`tab-btn w-max cursor-pointer`}>
            Product Specification
          </li>
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
                minHeight={"3rem"}
                trigger={item.title}
                triggerClassName={`text__lg text-primary-500 font-bold`}
                className="relative flex flex-col gap-2 border-b-1 border-Gray-DFDFDF px-8 pt-4 pb-14"
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

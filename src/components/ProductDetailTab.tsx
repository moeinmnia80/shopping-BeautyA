import { FC } from "react";

import { tabChangeHandler } from "@utils/helper";
import ProductsType from "src/types/Products";

type ProductDetailTabProps = {
  data?: {
    skincareProduct: ProductsType & {
      type: string;
      details: string;
      advantage: string;
      productInfo: {
        html: TrustedHTML;
      };
    };
  };
};

const ProductDetailTab: FC<ProductDetailTabProps> = ({ data }) => {
  tabChangeHandler();

  return (
    <>
      <div className="w-full  py-12">
        <ul className="relative flex justify-between gap-10 w-full font-bold border-b-1 border-Gray-606060 py-2 mt-5 overflow-x-scroll overflow-y-hidden">
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
        <div
          dangerouslySetInnerHTML={{
            __html: data?.skincareProduct.productInfo.html || "",
          }}
          className="bg-white px-8 py-8"
        />
      </div>
    </>
  );
};

export default ProductDetailTab;

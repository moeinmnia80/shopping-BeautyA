import { ComponentProps, FC } from "react";
import { useQuery } from "@apollo/client";

import ProductCart from "@ui/ProductCart";
import ProductsType from "src/types/Products";

import { GET_SKINCARE_PRODUCTS } from "@graphql/queries";

import skincareADS1 from "@assets/images/skincare ads 1.png";
import skincareADS2 from "@assets/images/skincare ads 2.png";
import skincareADS3 from "@assets/images/skincare ads 3.png";
import SkeletonLoader from "./ui/SkeletonLoader";

type SkincareProductsProps = ComponentProps<"section">;
type SkincareProductType = {
  skincareProducts: ProductsType[];
};

const SkincareProducts: FC<SkincareProductsProps> = ({ ...props }) => {
  const { loading, data } = useQuery<SkincareProductType>(
    GET_SKINCARE_PRODUCTS
  );

  return (
    <>
      <section {...props}>
        <div className="w-full h-8 mb-3">recommand</div>
        <div className="grid lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {loading ? (
            <>
              <SkeletonLoader className="w-full" />
              <SkeletonLoader className="w-full" />
              <SkeletonLoader className="w-full" />
              <SkeletonLoader className="w-full" />
            </>
          ) : (
            <>
              {data?.skincareProducts.map((item) => (
                <ProductCart key={item.slug} data={item} />
              ))}
              <img
                src={skincareADS1}
                alt=""
                className="w-full h-full object-cover xl:col-start-3 xl:row-start-1"
              />
              <img
                src={skincareADS2}
                alt=""
                className="hidden w-full h-full object-cover lg:flex xl:col-start-3 col-span-2 xl:row-start-2"
              />
              <img
                src={skincareADS3}
                alt=""
                className="w-full h-full object-cover"
              />
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default SkincareProducts;

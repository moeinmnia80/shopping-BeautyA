import { useQuery } from "@apollo/client";
import {
  ComponentProps,
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useState,
} from "react";

import ProductCart from "@ui/ProductCart";
import Select, { Option } from "@ui/Select";
import ProductsType from "src/types/Products";
import SkeletonLoader from "@ui/SkeletonLoader";
import { sortProductHandler } from "@utils/helper";

import { GET_SKINCARE_PRODUCTS } from "@graphql/queries";

import skincareADS1 from "@assets/images/skincare ads 1.png";
import skincareADS2 from "@assets/images/skincare ads 2.png";
import skincareADS3 from "@assets/images/skincare ads 3.png";
import FilterIcon from "@assets/icons/FilterIcon";
import CheckIcon from "@assets/icons/CheckIcon";

type SkincareProductsProps = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
} & ComponentProps<"section">;
type SkincareProductType = {
  skincareProducts: ProductsType[];
};

const sortItems = [
  { id: 0, label: "", name: "recommended" },
  { id: 1, label: "", name: "expensive" },
  { id: 2, label: "", name: "cheap" },
];

const SkincareProducts: FC<SkincareProductsProps> = ({
  setIsOpen,
  ...props
}) => {
  const [whichSort, setWhichSort] = useState("recommended");
  const [products, setProducts] = useState<ProductsType[]>([]);

  const { loading, data } = useQuery<SkincareProductType>(
    GET_SKINCARE_PRODUCTS
  );

  useEffect(() => {
    data?.skincareProducts.length && setProducts([...data.skincareProducts]);
  }, [data?.skincareProducts]);

  const selectHandler = (sort: string) => {
    setWhichSort(sort);
    setProducts(sortProductHandler(sort, products, data!.skincareProducts));
  };

  return (
    <>
      <section {...props}>
        <div className="flex md:justify-end gap-5 w-full h-8 mb-5">
          <button
            className={`flex items-center justify-center lg:hidden w-full md:w-2/3 h-full
            text-sm bg-white border-1 border-Gray-DFDFDF`}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <FilterIcon className="w-4 h-4" />
            <p className="ml-1 mt-1">Filter</p>
          </button>
          <Select
            label="Sort:"
            labelText="absolute left-2 top-1/2 -translate-y-1/2 text-sm flex font-bold"
            labelClassName={`relative flex self-end w-full md:w-[calc(100%/3-.75rem)]  xl:w-[calc(25%-1rem)] h-full cursor-pointer`}
            className={`flex items-center justify-start w-full text-xs lg:text-sm font-light 
            capitalize bg-white border-1 border-Gray-DFDFDF outline-none pl-10 md:pl-12 py-1`}
            value={whichSort}
          >
            {sortItems.map((item) => (
              <Option
                key={item.id}
                className={`flex items-center justify-between text-sm capitalize border-b-1 border-Gray-DFDFDF px-2 py-3 
                cursor-pointer last:border-0 `}
                value={item.name}
                onClick={() => selectHandler(item.name)}
              >
                {item.name}
                {item.name === whichSort && (
                  <CheckIcon className="w-4 h-4 text-primary-500" />
                )}
              </Option>
            ))}
          </Select>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
          {loading ? (
            <>
              <SkeletonLoader className="w-full" />
              <SkeletonLoader className="w-full" />
              <SkeletonLoader className="w-full" />
              <SkeletonLoader className="w-full" />
            </>
          ) : (
            <>
              {products.map((item) => (
                <ProductCart
                  key={item.slug}
                  data={item}
                  link={`/women-skincare/${item.slug}`}
                />
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

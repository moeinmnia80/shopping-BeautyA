import { useParams } from "react-router-dom";

import { useQuery } from "@apollo/client";
import { GET_SKINCARE_PRODUCT } from "@graphql/queries";

import Loader from "@components/ui/Loader";
import ProductsType from "src/types/Products";
import ProductDetailSwiper from "@components/ProductDetailSwiper";
import Breadcrumb, { BreadcrumbItem } from "@components/ui/Breadcrumb";
import Select, { Option } from "@components/ui/Select";
import LocationIcon from "@assets/icons/LocationIcon";
import GiftIcon from "@assets/icons/GiftIcon";
import TagIcon from "@assets/icons/TagIcon";
import ChatIcon from "@assets/icons/ChatIcon";
import { useEffect, useState } from "react";

const size = [
  { id: 0, size: "30 ML", price: "65.00" },
  { id: 1, size: "50 ML", price: "150.00" },
  { id: 2, size: "70 ML", price: "200.00" },
  { id: 3, size: "100 ML", price: "520.00" },
];

const ProductDetailPage = () => {
  const [whichItem, setWhichItem] = useState("30 ML");
  const [status, setStatus] = useState<"vertical" | "horizontal">("vertical");

  const { slug } = useParams();
  const { loading, data } = useQuery<{
    skincareProduct: ProductsType & {
      type: string;
      details: string;
      advantage: string;
    };
  }>(GET_SKINCARE_PRODUCT, {
    variables: { slug },
  });

  useEffect(() => {
    const windowStatusHandler = () => {
      window.innerWidth < 1024
        ? setStatus("horizontal")
        : setStatus("vertical");
    };
    window.addEventListener("resize", windowStatusHandler);
    return () => window.removeEventListener("resize", windowStatusHandler);
  }, []);

  return (
    <>
      <section className="lg:container w-full h-full lg:h-[calc(100dvh-7rem)] px-8 pt-12 lg:py-12">
        <Loader loading={loading} />
        <Breadcrumb className="flex flex-wrap items-center gap-2 font-light capitalize">
          <BreadcrumbItem to={"/"} className="text__md ">
            home
          </BreadcrumbItem>
          <BreadcrumbItem to={"/women-skincare"} className="text__md ">
            women skincare
          </BreadcrumbItem>
          <BreadcrumbItem to={"/women-skincare"} className="text__md font-bold">
            {data?.skincareProduct.title}
          </BreadcrumbItem>
        </Breadcrumb>
        <div className="grid grid-cols-1 grid-rows-subgrid lg:grid-cols-3 lg:grid-rows-1 items-center gap-5 w-full h-full mt-5">
          <ProductDetailSwiper status={status} />
          <h4
            className={`text-primary-500 text__4xl font-bold
            row-start-1 row-end-2 col-span-1 lg:col-start-3 lg:col-end-5`}
          >
            {data?.skincareProduct.title}
          </h4>
          <div className="capitalize row-start-2 row-end-3 lg:col-start-3 lg:col-end-5">
            <p className="text__md font-bold">{data?.skincareProduct.type}</p>
            <p className="text__md text-Gray-606060">
              {data?.skincareProduct.details}
            </p>
            <p className="text__md text-Gray-606060 font-bold">
              {data?.skincareProduct.advantage}
            </p>
          </div>
          <p className="text__xl text-black font-extrabold lg:col-start-3 lg:col-end-5">
            ${data?.skincareProduct.price}
          </p>
          <Select
            label=""
            labelClassName="flex flex-col w-full lg:col-start-3 lg:col-end-5"
            className={`relative flex items-center w-full h-full text__md py-3 px-2
            text-Gray-606060 bg-transparent border-b-1 border-Gray-606060 outline-none`}
            value={whichItem}
          >
            {size.map((item) => (
              <Option
                key={item.id}
                className={`flex items-center justify-between text-sm capitalize border-b-1 border-Gray-DFDFDF px-2 py-3 
                cursor-pointer last:border-0 `}
                onClick={() => setWhichItem(item.size)}
              >
                {item.size}
                <span className="absolute right-2">${item.price}</span>
              </Option>
            ))}
          </Select>
          <button
            className={`fixed bottom-0 left-0 right-0 md:relative flex items-center justify-center w-full  text__md
          text-white bg-primary-500 py-3 capitalize lg:col-start-3 lg:col-end-5 z-40`}
          >
            <LocationIcon className="w-6 h-6 mr-2" />
            <p className="mt-1">check in branches stock</p>
          </button>
          <div className="w-full text__sm flex flex-col gap-6 bg-primary-25 px-4 py-5 lg:col-start-3 lg:col-end-5">
            <span className="flex gap-4 text-primary-500 font-medium capitalize">
              <GiftIcon className="w-6 h-6 " strokeWidth={2} />
              <p>receive 2 free samples when you spend $100</p>
            </span>
            <span className="flex gap-4 text-primary-500 font-medium capitalize">
              <TagIcon className="w-6 h-6 " strokeWidth={2} />
              <p>receive $2 when you return 5 empty containers</p>
            </span>
            <span className="flex gap-4 text-primary-500 font-medium capitalize">
              <ChatIcon className="w-6 h-6 " strokeWidth={2} />
              <p>receive free 1-2-1 expert advice in branches</p>
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetailPage;

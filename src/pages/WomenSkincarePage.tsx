import { useQuery } from "@apollo/client";

import { GET_SKINCARE_PRODUCTS } from "@graphql/queries";

import Sidebar from "@components/Sidebar";
import SkincareProducts from "@components/SkincareProducts";
import Breadcrumb, { BreadcrumbItem } from "@components/ui/Breadcrumb";

import ProductsType from "src/types/Products";
import { useState } from "react";
import { hideOverflow } from "@utils/helper";

const WomenSkincarePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data } = useQuery<{ skincareProducts: ProductsType[] }>(
    GET_SKINCARE_PRODUCTS
  );

  hideOverflow(isOpen);
  return (
    <>
      <section className="lg:container flex flex-col gap-4 w-full px-8 py-12">
        <Breadcrumb className="flex items-center gap-2 font-light capitalize">
          <BreadcrumbItem to={"/"} className="">
            home
          </BreadcrumbItem>
          <BreadcrumbItem to={"/women-skincare"} className="font-bold">
            women skincare
          </BreadcrumbItem>
        </Breadcrumb>
        <div className="flex items-center gap-2">
          <h2 className="text-2xl font-bold">Women Skincare</h2>
          <span className="text-Gray-606060 font-bold">
            ({`${data?.skincareProducts.length || 0}`})
          </span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 w-full">
          <Sidebar
            className={
              isOpen
                ? "flex lg:hidden flex-col fixed top-0 left-0 w-full h-dvh bg-white z-50 px-8 pt-10"
                : `hidden lg:flex flex-col w-full
                lg:col-start-1 lg:col-end-2`
            }
            setIsOpen={setIsOpen}
          />
          <SkincareProducts
            className="flex flex-col w-full lg:col-start-2 lg:col-span-3 xl:col-span-4 2xl:col-span-5"
            setIsOpen={setIsOpen}
          />
        </div>
      </section>
    </>
  );
};

export default WomenSkincarePage;

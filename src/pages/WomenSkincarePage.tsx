import { useQuery } from "@apollo/client";

import { GET_SKINCARE_PRODUCTS } from "@graphql/queries";

import Sidebar from "@components/Sidebar";
import SkincareProducts from "@components/SkincareProducts";
import Breadcrumb, { BreadcrumbItem } from "@components/ui/Breadcrumb";

import ProductsType from "src/types/Products";

const WomenSkincarePage = () => {
  const { data } = useQuery<{ skincareProducts: ProductsType[] }>(
    GET_SKINCARE_PRODUCTS
  );
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
        <div className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-5 gap-5 w-full">
          <Sidebar
            className={`hidden lg:flex flex-col w-full
            lg:col-start-1 lg:col-end-2 
            `}
          />
          <SkincareProducts className="flex flex-col w-full lg:col-start-2 lg:col-span-3 xl:col-span-4" />
        </div>
      </section>
    </>
  );
};

export default WomenSkincarePage;

import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

import { ProductDetailType } from "src/types/Products";
import { GET_SKINCARE_PRODUCT } from "@graphql/queries";
import ProductDetailTab from "@components/ProductDetailTab";
import ProductDetailInfo from "@components/ProductDetailInfo";
import ProductDetailSwiper from "@components/ProductDetailSwiper";
import Breadcrumb, { BreadcrumbItem } from "@components/ui/Breadcrumb";

const ProductDetailPage = () => {
  const { slug } = useParams();
  const { loading, data } = useQuery<{
    skincareProduct: ProductDetailType;
  }>(GET_SKINCARE_PRODUCT, {
    variables: { slug },
  });

  return (
    <>
      <section className="lg:container w-full px-8 pt-12 lg:py-12">
        <div className="h-full lg:h-[calc(100dvh-13rem)]">
          <Breadcrumb className="flex flex-wrap items-center gap-2 font-light capitalize">
            <BreadcrumbItem to={"/"} className="text__md ">
              home
            </BreadcrumbItem>
            <BreadcrumbItem to={"/women-skincare"} className="text__md ">
              women skincare
            </BreadcrumbItem>
            <BreadcrumbItem
              to={"/women-skincare"}
              className="text__md font-bold"
            >
              {data?.skincareProduct.title}
            </BreadcrumbItem>
          </Breadcrumb>
          <div
            className={`grid grid-cols-1 grid-rows-subgrid  lg:grid-cols-3 lg:grid-rows-1
          items-center gap-5 w-full h-full mt-5`}
          >
            <ProductDetailSwiper />
            <ProductDetailInfo data={data} loading={loading} />
          </div>
        </div>
        <ProductDetailTab data={data} />
      </section>
    </>
  );
};

export default ProductDetailPage;

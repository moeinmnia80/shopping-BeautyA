import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

import PlayIcon from "@assets/icons/PlayIcon";
import productVideo from "@assets/images/productVideo.png";

import { ProductDetailType } from "src/types/Products";
import { GET_SKINCARE_PRODUCT } from "@graphql/queries";
import ProductDetailFAQ from "@components/ProductDetailFAQ";
import ProductDetailTab from "@components/ProductDetailTab";
import ProductDetailInfo from "@components/ProductDetailInfo";
import ProductDetailLike from "@components/ProductDetailLike";
import ProductDetailSwiper from "@components/ProductDetailSwiper";
import ProductDetailBanner from "@components/ProductDetailBanner";
import Breadcrumb, { BreadcrumbItem } from "@components/ui/Breadcrumb";
import ProductDetailRecommanded from "@components/ProductDetailRecommanded";

const ProductDetailPage = () => {
  const { slug } = useParams();
  const { loading, data } = useQuery<{
    skincareProduct: ProductDetailType;
  }>(GET_SKINCARE_PRODUCT, {
    variables: { slug },
  });

  return (
    <>
      <section className="lg:container w-full px-8 pt-12">
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
      <ProductDetailBanner className="w-full h-full bg-primary-700 py-12" />
      <ProductDetailFAQ />
      <ProductDetailRecommanded />
      <div className="relative lg:container sm:px-8 py-12 cursor-pointer">
        <img src={productVideo} alt="" className="w-full aspect-video" />
        <PlayIcon
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[9vmax] h-[9vmax] text-white "
          strokeWidth={1}
        />
      </div>
      <ProductDetailLike />
    </>
  );
};

export default ProductDetailPage;

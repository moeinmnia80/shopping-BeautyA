import Banner from "@components/ui/Banner";
import NewProducts from "@components/ui/NewProducts";
import SpecialOffers from "@components/ui/SpecialOffers";
import SkincareAnalysis from "@components/ui/SkincareAnalysis";
import BestSellerProduucts from "@components/ui/BestSellerProduucts";
import ProductsCategories from "@components/ui/ProductsCategories";
import OurBrand from "@components/ui/OurBrand";

const HomePage = () => {
  return (
    <>
      <Banner />
      <ProductsCategories />
      <SkincareAnalysis />
      <BestSellerProduucts />
      <NewProducts />
      <SpecialOffers />
      <OurBrand />
    </>
  );
};

export default HomePage;

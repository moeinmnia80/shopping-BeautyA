import Banner from "@components/ui/Banner";
import NewProducts from "@components/NewProducts";
import SpecialOffers from "@components/SpecialOffers";
import SkincareAnalysis from "@components/SkincareAnalysis";
import BestSellerProduucts from "@components/BestSellerProducts";
import ProductsCategories from "@components/ProductsCategories";
import OurBrand from "@components/OurBrand";
import OurBlogs from "@components/OurBlogs";
import ScrollTopButton from "@components/ui/ScrollTopButton";
import ChatBoxButton from "@components/ui/ChatBoxButton";

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
      <OurBlogs />
      <ScrollTopButton />
      <ChatBoxButton />
    </>
  );
};

export default HomePage;

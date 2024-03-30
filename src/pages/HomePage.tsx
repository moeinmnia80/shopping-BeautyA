import Banner from "@components/Banner";
import BestSellerProduucts from "@components/BestSellerProduucts";
import Categories from "@components/Categories";
import FirstSkinTypeBanner from "@components/FirstSkinTypeBanner";
import NewProducts from "@components/ui/NewProducts";

const HomePage = () => {
  return (
    <>
      <Banner />
      <Categories />
      <FirstSkinTypeBanner />
      <BestSellerProduucts />
      <NewProducts />
    </>
  );
};

export default HomePage;

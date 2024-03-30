import Banner from "@components/Banner";
import BestSellerProduucts from "@components/BestSellerProduucts";
import Categories from "@components/Categories";
import FirstSkinTypeBanner from "@components/FirstSkinTypeBanner";

const HomePage = () => {
  return (
    <>
      <Banner />
      <Categories />
      <FirstSkinTypeBanner />
      <BestSellerProduucts />
    </>
  );
};

export default HomePage;

import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import NotFoundPage from "@pages/404";
import HomePage from "@pages/HomePage";
import WomenSkincarePage from "@pages/WomenSkincarePage";
import ProductDetailPage from "@pages/ProductDetailPage";

const Router: FC = () => {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/women-skincare" element={<WomenSkincarePage />} />
        <Route path="/women-skincare/:slug" element={<ProductDetailPage />} />
        <Route path="/products/:slug" element={<ProductDetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default Router;

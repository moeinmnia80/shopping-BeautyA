import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "@pages/HomePage";
import WomenSkincarePage from "@pages/WomenSkincarePage";

const Router: FC = () => {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/women-skincare" element={<WomenSkincarePage />} />
      </Routes>
    </>
  );
};

export default Router;

import HomePage from "@pages/HomePage";
import { FC } from "react";
import { Route, Routes } from "react-router-dom";

const Router: FC = () => {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
      </Routes>
    </>
  );
};

export default Router;

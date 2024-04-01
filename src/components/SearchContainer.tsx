import { FC } from "react";

const SearchContainer: FC<{ isOpen: boolean }> = ({ isOpen }) => {
  return <>{isOpen}</>;
};

export default SearchContainer;

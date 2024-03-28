import { FC } from "react";

const SearchContainer: FC<{ isOpen: boolean }> = ({ isOpen }) => {
  return <>{console.log(isOpen)}</>;
};

export default SearchContainer;

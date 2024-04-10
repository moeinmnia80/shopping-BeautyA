import { FC } from "react";

const SearchContainer: FC<{ isSearching: boolean }> = ({ isSearching }) => {
  return <>{isSearching}</>;
};

export default SearchContainer;

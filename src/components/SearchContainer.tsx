import { FC, FormEvent, useState } from "react";

import SearchIcon from "@assets/icons/SearchIcon";

import SearchSuggestion from "@components/SearchSuggestion";
import SearchTrends from "@components/SearchTrends";
import PopularProducts from "@components/PopularProducts";

type SearchContainerProps = {
  isSearching: boolean;
  setIsSearching: (value: boolean) => void;
};

const SearchContainer: FC<SearchContainerProps> = ({
  isSearching,
  setIsSearching,
}) => {
  const [search, setSearch] = useState("");
  const [searchHistory, setSearchHistory] = useState<string[]>([]);

  const recordFormData = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearchHistory((prev) => [...prev, search]);
  };
  return (
    <>
      <section
        className={`fixed top-20 lg:top-24 ${
          isSearching ? "flex" : "hidden"
        } w-full h-svh bg-[#0000020] backdrop-blur-sm`}
      >
        <div
          className={`w-full h-svh overflow-auto md:overflow-hidden md:h-max bg-background pb-12  md:pb-0`}
          onMouseLeave={() => setIsSearching(false)}
        >
          <div className="lg:container px-8 py-8">
            <form onSubmit={recordFormData}>
              <label htmlFor="" className="relative flex items-center w-full">
                <SearchIcon
                  style={`absolute left-4 top-1/2 -translate-y-[calc(50%+2px)] w-5 h-5 text-Gray-606060`}
                />
                <input
                  type="text"
                  placeholder="What Are You Looking For?"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  className={`w-full h-10 bg-transparent border-b-1 border-black outline-none pl-12
              placeholder:text-Gray-606060 focus-within:border-primary-500 duration-300`}
                />
              </label>
            </form>
            <div className="flex flex-col md:flex-row w-full py-6">
              {!search ? (
                <>
                  <SearchTrends searchHistory={searchHistory} />
                  <PopularProducts />
                </>
              ) : (
                <SearchSuggestion search={search} />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SearchContainer;

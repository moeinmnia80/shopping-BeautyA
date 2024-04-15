import { FC } from "react";

type SearchTrendsProps = { searchHistory: string[] };

const SearchTrends: FC<SearchTrendsProps> = ({ searchHistory }) => {
  return (
    <>
      <div className="flex flex-col w-full md:w-1/5">
        <ul className="mb-6">
          <h4 className="font-bold text-xl mb-6">Trending Now</h4>
          <li className="hover:text-primary-500 cursor-pointer">
            Advanced Night Repair
          </li>
          <li className="hover:text-primary-500 cursor-pointer">Pure Color</li>
          <li className="hover:text-primary-500 cursor-pointer">Moisturizer</li>
          <li className="hover:text-primary-500 cursor-pointer">Serum</li>
        </ul>
        <ul>
          <h4 className="font-bold text-xl mb-6">Your Recent Search</h4>
          {!searchHistory.length && <li className="text-Gray-868686">...</li>}
          {searchHistory.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SearchTrends;

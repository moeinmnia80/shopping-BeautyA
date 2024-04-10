import { FC } from "react";

const SearchTrends: FC<{ searchHistory: string[] }> = ({ searchHistory }) => {
  return (
    <>
      <div className="w-1/5">
        <ul className="mb-6">
          <h4 className="font-bold text-xl mb-6">Trending Now</h4>
          <li>Advanced Night Repair</li>
          <li>Pure Color</li>
          <li>Moisturizer</li>
          <li>Serum</li>
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

import { FC } from "react";

const SearchSuggestion: FC<{ search: string }> = ({ search }) => {
  return (
    <>
      <div>
        <h4 className="font-bold text-xl mb-6">Suggestion</h4>
        <p>"{search}"</p>
      </div>
    </>
  );
};

export default SearchSuggestion;

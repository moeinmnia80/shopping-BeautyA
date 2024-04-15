import { FC } from "react";

type SearchSuggestionProps = { search: string };

const SearchSuggestion: FC<SearchSuggestionProps> = ({ search }) => {
  return (
    <>
      <div>
        <h4 className="font-bold text-xl mb-6">Suggestion</h4>
        <p>{search}</p>
      </div>
    </>
  );
};

export default SearchSuggestion;

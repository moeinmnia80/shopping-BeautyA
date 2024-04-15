import { FC } from "react";

import { countries } from "@constants/counteries";

type selectProps = { data: { id: string; label: string } };

const Select: FC<selectProps> = ({ data }) => {
  return (
    <>
      <label htmlFor={data.id} className="flex flex-col h-16">
        {data.label}
        <select className="h-full text-Gray-606060 border-b-1 border-Gray-CBCBCB outline-none">
          {countries.map((country, index) => (
            <option
              key={index}
              className="flex h-20"
              selected={country.code === "US"}
            >
              {data.id === "country" && country.name}
              {data.id === "language" && country.language.name}
              {data.id === "currency" && country.currency.code}
            </option>
          ))}
        </select>
      </label>
    </>
  );
};

export default Select;

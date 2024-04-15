import { FC } from "react";

import { countries } from "@constants/counteries";
import LocationType from "src/types/Location";

type selectProps = {
  data: { id: string; label: string; name: string };
  name: "region" | "language" | "currency";
  changeLocation: LocationType;
  setChangeLocation: (value: LocationType) => void;
};

const Select: FC<selectProps> = ({ data, name, changeLocation }) => {
  return (
    <>
      <label htmlFor={data.id} className="flex flex-col h-16">
        {data.label}
        <select
          name={data.name}
          className="h-full text-Gray-606060 border-b-1 border-Gray-606060 outline-none"
          value={name === data.label ? changeLocation[name] : undefined}
        >
          {countries.map((country, index) => (
            <option
              key={index}
              className="flex h-20"
              value={
                name === "region"
                  ? `${country.code}`
                  : name === data.label
                  ? `${country[name].code}`
                  : undefined
              }
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

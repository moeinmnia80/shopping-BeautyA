import { FC, SetStateAction } from "react";

import { countries } from "@constants/counteries";
import LocationType from "src/types/Location";

type selectProps = {
  data: { id: string; label: string; name: string };
  name: "region" | "language" | "currency";
  newLocation: LocationType;
  setNewLocation: (value: SetStateAction<LocationType>) => void;
};

const Select: FC<selectProps> = ({
  data,
  name,
  newLocation,
  setNewLocation,
}) => {
  return (
    <>
      <label htmlFor={data.id} className="flex flex-col h-16">
        {data.label}
        <select
          name={data.name}
          className="h-full text-Gray-606060 border-b-1 border-Gray-606060 outline-none"
          onChange={(event) =>
            setNewLocation((prev: LocationType) => ({
              ...prev,
              [name]: event.target.value,
            }))
          }
          value={newLocation[`${name}`]}
        >
          {countries.map((country, index) => (
            <option
              key={index}
              className="flex h-20"
              value={
                name === "region"
                  ? `${country.code}`
                  : name === "language"
                  ? `${country[name].code?.toUpperCase()}`
                  : country[name].code
              }
            >
              {name === "region"
                ? `${country.name}`
                : name === "language"
                ? `${country[name].name}`
                : `${country.currency.symbol} (${country.currency.code})`}
            </option>
          ))}
        </select>
      </label>
    </>
  );
};

export default Select;

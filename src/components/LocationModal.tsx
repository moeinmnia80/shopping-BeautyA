import { FC, useState } from "react";

import XIcone from "@assets/icons/XIcone";
import Select from "@components/ui/Select";
import { locationInput } from "@constants/locationInput";
import LocationType from "src/types/Location";
import { countries } from "@constants/counteries";
import { hideOverflow } from "@utils/helper";
import useClickOutside from "@hooks/useClickOutside";

type LocationModalProps = {
  isClicked: boolean;
  setIsClicked: (value: boolean) => void;
  changeLocation: LocationType;
  setChangeLocation: (value: LocationType) => void;
};

const LocationModal: FC<LocationModalProps> = ({
  isClicked,
  setIsClicked,
  changeLocation,
  setChangeLocation,
}) => {
  const [newLocation, setNewLocation] = useState<LocationType>(changeLocation);
  const domeNode = useClickOutside<HTMLDivElement>(() => setIsClicked(false));

  hideOverflow(isClicked);

  const cancleRecordLocationData = () => {
    setIsClicked(false);
    setNewLocation(changeLocation);
  };
  const recordLocationData = () => {
    setChangeLocation(newLocation);
    setIsClicked(false);
  };
  return (
    <>
      <section
        className={`fixed top-20 lg:top-24 ${
          isClicked ? "flex" : "hidden"
        } flex justify-center items-center w-full h-svh bg-[#0000020] backdrop-blur-sm`}
      ></section>
      <div
        className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
      ${isClicked ? "flex" : "hidden"}
      flex flex-col justify-between w-full h-full md:w-[60vw] md:h-[60vh] lg:w-[40vw] lg:h-[60vh] xl:w-[30vw] bg-white p-10 z-50`}
        ref={domeNode}
      >
        <div className="flex items-center justify-between">
          <h5 className="location-modal__title font-bold">
            Location and currency settings
          </h5>
          <XIcone
            style={`w-6 h-6 cursor-pointer hover:text-Error p-1`}
            onClick={() => setIsClicked(false)}
          />
        </div>
        {locationInput.map((item) => (
          <Select
            key={item.id}
            label={item.label}
            labelClassName="relative flex flex-col h-16"
            name={item.name}
            className="h-full text-Gray-606060 border-b-1 border-Gray-606060 outline-none"
            onChange={(event) =>
              setNewLocation((prev: LocationType) => ({
                ...prev,
                [item.name]: event.target.value,
              }))
            }
            value={newLocation[`${item.name}`]}
          >
            {countries.map((country, index) => (
              <option
                key={index}
                className="flex h-20"
                value={
                  item.name === "region"
                    ? `${country.code}`
                    : item.name === "language"
                    ? `${country[item.name].code?.toUpperCase()}`
                    : country[item.name].code
                }
              >
                {item.name === "region"
                  ? `${country.name}`
                  : item.name === "language"
                  ? `${country[item.name].name}`
                  : `${country.currency.symbol} (${country.currency.code})`}
              </option>
            ))}
          </Select>
        ))}
        <div className="flex gap-4">
          <button
            className="w-full font-light"
            onClick={cancleRecordLocationData}
          >
            Cancle
          </button>
          <button
            className="w-full font-light text-white bg-primary-500 py-2"
            onClick={recordLocationData}
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default LocationModal;

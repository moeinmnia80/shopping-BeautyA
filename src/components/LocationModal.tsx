import { FC } from "react";

import XIcone from "@assets/icons/XIcone";
import Select from "@components/ui/Select";
import { locationInput } from "@constants/locationInput";

type LocationModalProps = {
  isClicked: boolean;
  setIsClicked: (value: boolean) => void;
  setChangeLocation: (value: { region: string; language: string }) => void;
};

const LocationModal: FC<LocationModalProps> = ({ isClicked, setIsClicked }) => {
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
      >
        <div className="flex items-center justify-between">
          <h5 className="text-[1vmax] font-bold">
            Location and currency settings
          </h5>
          <XIcone
            style={`w-6 h-6 cursor-pointer hover:text-Error p-1`}
            onClick={() => setIsClicked(false)}
          />
        </div>
        <Select data={locationInput[0]} />
        <Select data={locationInput[1]} />
        <Select data={locationInput[2]} />
        <div className="flex gap-4">
          <button className="w-full font-light">Cancle</button>
          <button className="w-full font-light text-white bg-primary-500 py-2">
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default LocationModal;

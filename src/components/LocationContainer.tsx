import XIcone from "@assets/icons/XIcone";
import { FC } from "react";

type LocationContainerProps = {
  isClicked: boolean;
  setIsClicked: (value: boolean) => void;
  setChangeLocation: (value: { region: string; language: string }) => void;
};

const LocationContainer: FC<LocationContainerProps> = ({
  isClicked,
  setIsClicked,
}) => {
  return (
    <>
      <section
        className={`fixed top-20 lg:top-24 ${
          isClicked ? "flex" : "hidden"
        } flex justify-center items-center w-full h-svh bg-[#0000020] backdrop-blur-sm`}
      >
        <div className="flex flex-col w-[30vw] h-[60vh] bg-white p-10">
          <div className="flex items-center justify-between">
            <h5 className="text-[1vmax] font-bold">
              Location and currency setting
            </h5>
            <XIcone
              style={`w-4 h-4 cursor-pointer hover:text-Error`}
              onClick={() => setIsClicked(false)}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default LocationContainer;

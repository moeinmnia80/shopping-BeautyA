import { FC, useState } from "react";

type ToggleButtonProps = {};

const ToggleButton: FC<ToggleButtonProps> = () => {
  const [isClicked, setIsClicked] = useState(true);
  return (
    <>
      <div
        className={`relative w-12 h-6 ${
          isClicked ? "bg-primary-500" : "bg-Gray-868686"
        } duration-300 cursor-pointer`}
        onClick={() => setIsClicked((prev) => !prev)}
      >
        <span
          className={`absolute top-1 ${
            isClicked ? "left-7" : "left-1"
          } block w-4 h-4 bg-white duration-300`}
        />
      </div>
    </>
  );
};

export default ToggleButton;

import { Dispatch, FC, ReactNode } from "react";

type CheckBoxProps = {
  container?: string;
  htmlFor: string;
  labelClassName: string;
  inputClassName?: string;
  children: ReactNode;
  setIsAcceptPolicy: Dispatch<React.SetStateAction<boolean>>;
};
const CheckBox: FC<CheckBoxProps> = ({
  container,
  htmlFor,
  labelClassName,
  inputClassName,
  setIsAcceptPolicy,
  children,
}) => {
  return (
    <div className={`${container}`}>
      <label htmlFor={htmlFor} className={labelClassName}>
        <input
          type="checkbox"
          id={htmlFor}
          className={`${inputClassName}`}
          onClick={() => setIsAcceptPolicy((prev) => !prev)}
        />
        <span className="custome-checkbox"></span>
        {children}
      </label>
    </div>
  );
};

export default CheckBox;

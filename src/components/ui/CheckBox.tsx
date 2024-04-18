import { ComponentProps, FC } from "react";

type CheckBoxProps = {
  container?: string;
  htmlFor: string;
  labelClassName: string;
  inputClassName?: string;
} & ComponentProps<"input">;

const CheckBox: FC<CheckBoxProps> = ({
  container,
  htmlFor,
  labelClassName,
  inputClassName,
  onClick,
  children,
  ...props
}) => {
  return (
    <div className={`${container}`}>
      <label htmlFor={htmlFor} className={`check-box__label ${labelClassName}`}>
        <input
          type="checkbox"
          id={htmlFor}
          className={`check-box__input ${inputClassName}`}
          {...props}
        />
        <span className="custome-checkbox"></span>
        {children}
      </label>
    </div>
  );
};

export default CheckBox;

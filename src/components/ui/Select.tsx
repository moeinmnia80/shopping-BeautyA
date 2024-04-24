import { ComponentProps, FC } from "react";

type selectProps = {
  label: string;
  labelClassName?: string;
  textStyle?: string;
} & ComponentProps<"select">;

const Select: FC<selectProps> = ({
  label,
  labelClassName,
  textStyle,
  children,
  ...props
}) => {
  return (
    <>
      <label className={labelClassName}>
        <span className={textStyle}>{label}</span>
        <select {...props}>{children}</select>
      </label>
    </>
  );
};

export default Select;

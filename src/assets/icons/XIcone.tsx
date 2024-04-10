import { ComponentPropsWithoutRef, FC } from "react";

const XIcone: FC<{ style: string } & ComponentPropsWithoutRef<"svg">> = ({
  style,
  ...rest
}) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={style}
        {...rest}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18 18 6M6 6l12 12"
        />
      </svg>
    </>
  );
};

export default XIcone;

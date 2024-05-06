import ChevronTop from "@assets/icons/ChevronTop";
import useClickOutside from "@hooks/useClickOutside";
import {
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  FC,
  ReactNode,
  useState,
} from "react";

type SelectProps = {
  label: string;
  labelClassName?: string;
  labelText?: string;
  value: string | ReactNode;
  children?: ReactNode;
} & ComponentPropsWithoutRef<"div">;

type OptionProps = {
  onClick: () => void;
} & Omit<ComponentPropsWithRef<"li">, "onClick">;

const Select: FC<SelectProps> = ({
  label,
  labelClassName,
  labelText,
  value,
  children,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const domeNode = useClickOutside<HTMLDivElement>(() => setIsOpen(false));

  return (
    <>
      <div className={`relative ${labelClassName}`} ref={domeNode}>
        <span className={labelText}>{label}</span>
        <div {...props} onClick={() => setIsOpen((prev) => !prev)}>
          {value}
          <ChevronTop
            className={`absolute top-1/2 -translate-y-1/2 right-2 w-4 h-4 ${
              isOpen ? "rotate-180" : "rotate-0"
            } duration-300`}
          />
        </div>
        <ul
          className={`${
            isOpen
              ? "absolute top-full flex flex-col w-full max-h-64 bg-white border-1 border-Gray-DFDFDF z-50 overflow-auto"
              : "hidden"
          }`}
          onClick={() => setIsOpen(false)}
        >
          {children}
        </ul>
      </div>
    </>
  );
};

export const Option: FC<OptionProps> = ({ children, onClick, ...props }) => {
  return (
    <>
      <li onClick={onClick} {...props}>
        {children}
      </li>
    </>
  );
};

export default Select;

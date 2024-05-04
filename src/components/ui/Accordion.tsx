import { ComponentProps, FC, ReactNode, useState } from "react";

import ChevronTop from "@assets/icons/ChevronTop";

type AccordionProps = {
  title: string;
  children?: ReactNode;
  childrenClass?: string;
} & Omit<ComponentProps<"div">, "onClick">;

const Accordion: FC<AccordionProps> = ({
  children,
  childrenClass,
  title,
  className,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className={`flex flex-col justify-center w-full bg-white border-b-1 border-Gray-DFDFDF
          p-3 cursor-pointer duration-300 ${
            isOpen ? "gap-3" : "gap-0"
          } ${className}`}
        onClick={() => setIsOpen((prev) => !prev)}
        {...props}
      >
        <span className="flex items-center justify-between w-full">
          <p
            className={`text-sm font-bold capitalize ${
              isOpen ? "text-primary-500" : "text-black"
            } duration-300`}
          >
            {title}
          </p>
          <ChevronTop
            className={`w-4 h-4 ${
              isOpen ? "rotate-0 text-primary-500" : "rotate-180"
            } duration-300`}
          />
        </span>
        <span
          className={`${
            isOpen ? `${childrenClass}` : "h-0 overflow-hidden"
          } duration-300 `}
        >
          {children}
        </span>
      </div>
    </>
  );
};

export default Accordion;

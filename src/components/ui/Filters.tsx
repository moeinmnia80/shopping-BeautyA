import { ComponentProps, FC, useState } from "react";

import ChevronTop from "@assets/icons/ChevronTop";
import ToggleButton from "@ui/ToggleButton";

type FiltersProps = {};
type AccordionProps = { title: string } & Omit<
  ComponentProps<"div">,
  "onClick"
>;

const Filters: FC<FiltersProps> = () => {
  return (
    <>
      <div className="w-full mt-3">
        <div
          className={`flex items-center justify-between w-full bg-white 
          border-t-1 border-b-1 border-Gray-DFDFDF p-3`}
        >
          <p className="capitalize text-sm font-bold">out of stock items</p>
          <ToggleButton />
        </div>
        <Accordion className="" title="category" />
        <Accordion className="" title="skin condition" />
        <Accordion className="" title="featured" />
        <Accordion className="" title="price" />
      </div>
    </>
  );
};

export const Accordion: FC<AccordionProps> = ({
  title,
  className,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className={`flex flex-col justify-center w-full h-max bg-white border-b-1 border-Gray-DFDFDF
        p-3 cursor-pointer overflow-auto duration-300 ${className}`}
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
            style={`w-4 h-4 ${
              isOpen ? "rotate-0 text-primary-500" : "rotate-180"
            } duration-300`}
          />
        </span>
        <span className={`${isOpen ? "flex" : "hidden"}`}>ok</span>
      </div>
    </>
  );
};

export default Filters;

import { FC, useState } from "react";

import CheckBox from "@ui/CheckBox";
import Accordion, { AccordionItem } from "@ui/Accordion";
import XIcon from "@assets/icons/XIcon";
import ToggleButton from "@ui/ToggleButton";
import { menuItems } from "@constants/MenuItems";

type AccordionType = {
  id: "category" | "skinCondition" | "special" | "price";
  childrenClass: string;
  title: string;
};

const Accordions: AccordionType[] = [
  { id: "category", childrenClass: "h-60", title: "category" },
  {
    id: "skinCondition",
    childrenClass: "h-[10.5rem]",
    title: "skin condition",
  },
  { id: "special", childrenClass: "h-36", title: "featured" },
  { id: "price", childrenClass: "h-[7.5rem]", title: "price" },
];

const Filters: FC = () => {
  const [filters, setFilters] = useState<string[]>([]);

  const toggleFilter = (item: string) => {
    filters.includes(item)
      ? setFilters(filters.filter((i) => i !== item))
      : setFilters((prev) => [...prev, item]);
  };

  const deleteFilter = (item: string) => {
    filters.includes(item) && setFilters(filters.filter((i) => i !== item));
  };
  return (
    <>
      <div className="w-full overflow-auto mt-5">
        {!!filters.length && (
          <div className="flex flex-col gap-2 bg-white border-t-1 border-Gray-DFDFDF p-3">
            <h4 className="text-sm font-bold">Applied Filters</h4>
            {filters.map((item) => (
              <span
                key={item}
                className={`flex items-center w-max border-1 border-Gray-DFDFDF px-2
                hover:border-primary-500 duration-200`}
              >
                {item}
                <XIcon
                  className={`w-3 h-3 ml-2 cursor-pointer hover:text-primary-500 duration-200`}
                  onClick={() => deleteFilter(item)}
                />
              </span>
            ))}
            <button
              className="w-max text-primary-500"
              onClick={() => setFilters([])}
            >
              Clear All Filters
            </button>
          </div>
        )}
        <div
          className={`flex items-center justify-between w-full bg-white 
          border-t-1 border-b-1 border-Gray-DFDFDF p-3`}
        >
          <p className="capitalize text-sm font-bold">out of stock items</p>
          <ToggleButton />
        </div>
        <Accordion className={`flex flex-col `}>
          {Accordions.map((accordion) => (
            <AccordionItem
              minHeight={0}
              icon="chevron"
              key={accordion.id}
              value={accordion.id}
              trigger={accordion.title}
              className={`flex flex-col bg-white border-b-1 border-Gray-DFDFDF`}
            >
              {menuItems[accordion.id].map((item) => (
                <CheckBox
                  key={item.id}
                  htmlFor={`${item.text}`}
                  labelClassName="filter-applied__items--label"
                  inputClassName="mr-1.5"
                  onChange={() => toggleFilter(item.text)}
                  name={item.text}
                  checked={filters.includes(item.text) ? true : false}
                >
                  {item.text}
                </CheckBox>
              ))}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </>
  );
};

export default Filters;

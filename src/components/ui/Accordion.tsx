import {
  FC,
  useState,
  createContext,
  ComponentProps,
  useEffect,
  useContext,
  Dispatch,
  SetStateAction,
  useRef,
} from "react";

import PlusIcon from "@assets/icons/PlusIcon";
import MinusIcon from "@assets/icons/MinusIcon";
import ChevronTop from "@assets/icons/ChevronTop";
import ChevronLeft from "@assets/icons/ChevronLeft";

type AccordionContextType = {
  selected: string[];
  setSelected: Dispatch<SetStateAction<string[]>>;
};
const AccordionContext = createContext({} as AccordionContextType);

type AccordionProps = ComponentProps<"ul">;

const Accordion: FC<AccordionProps> = ({ children, onChange, ...props }) => {
  const [selected, setSelected] = useState<string[]>([]);

  useEffect(() => {}, [selected]);
  return (
    <>
      <ul {...props}>
        <AccordionContext.Provider value={{ selected, setSelected }}>
          {children}
        </AccordionContext.Provider>
      </ul>
    </>
  );
};

type AccordionItemProps = {
  value: string;
  trigger: string;
  triggerClassName?: string;
  contentClassName?: string;
  minHeight: 0 | "1rem" | "2rem" | "3rem" | "5rem" | "7.5rem" | "10rem";
  icon: "chevron" | "plus";
  togglerButton: boolean;
} & ComponentProps<"li">;

export const AccordionItem: FC<AccordionItemProps> = ({
  children,
  value,
  trigger,
  triggerClassName,
  contentClassName,
  minHeight,
  icon,
  togglerButton,
  ...props
}) => {
  const { selected, setSelected } = useContext(AccordionContext);
  const boxHeight = useRef<HTMLDivElement | null>(null);

  const open = selected.includes(value);

  const clickHandler = () => {
    selected.includes(value)
      ? setSelected([...selected.filter((item) => item !== value)])
      : setSelected((prev) => [...prev, value]);
  };

  return (
    <>
      <li {...props}>
        <header
          role="button"
          onClick={() => clickHandler()}
          className="flex items-center justify-between capitalize text-sm font-bold p-3"
        >
          <h4
            className={`w-4/5 ${
              open ? " text-primary-500" : ""
            } ${triggerClassName}`}
          >
            {trigger}
          </h4>
          {icon === "chevron" ? (
            <ChevronTop
              className={`w-4 h-4 ${
                open ? "rotate-180 text-primary-500" : "rotate-0"
              } duration-300`}
            />
          ) : open ? (
            <MinusIcon
              className={`w-4 h-4 ${open ? "text-primary-500" : ""} ${
                togglerButton ? "lg:hidden" : ""
              }`}
            />
          ) : (
            <PlusIcon
              className={`w-4 h-4 ${open ? "text-primary-500" : ""} ${
                togglerButton ? "lg:hidden" : ""
              }`}
            />
          )}
        </header>
        <div
          className={`overflow-y-hidden transition-all duration-300`}
          style={{
            height: open ? boxHeight.current?.offsetHeight || 0 : minHeight,
          }}
        >
          <div
            className={`flex flex-col gap-1 pb-3 ${contentClassName || "px-3"}`}
            ref={boxHeight}
          >
            {children}
            {togglerButton && (
              <button
                className="absolute left-11 bottom-4 flex items-center gap-2 capitalize text-xs text-primary-500"
                onClick={clickHandler}
              >
                {open ? "read less" : "read more"}
                <ChevronLeft
                  strokeWidth={3}
                  className={`w-4 h-4 ${
                    open ? "rotate-0" : "rotate-180"
                  } duration-300`}
                />
              </button>
            )}
          </div>
        </div>
      </li>
    </>
  );
};

export default Accordion;

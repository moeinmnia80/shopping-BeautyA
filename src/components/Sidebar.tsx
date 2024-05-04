import { ComponentProps, Dispatch, FC, SetStateAction } from "react";

import Filters from "@components/Filters";
import XIcon from "@assets/icons/XIcon";

type SidebarProps = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
} & ComponentProps<"div">;

const Sidebar: FC<SidebarProps> = ({ setIsOpen, ...props }) => {
  return (
    <>
      <div {...props}>
        <div className="flex items-center justify-between">
          <h4 className="flex items-center text-xl font-bold h-8">Filters</h4>
          <XIcon
            className={`w-5 h-5 hover:text-primary-500 md:hidden`}
            onClick={() => setIsOpen(false)}
          />
        </div>
        <Filters />
      </div>
    </>
  );
};

export default Sidebar;

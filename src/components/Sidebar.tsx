import { ComponentProps, Dispatch, FC, SetStateAction } from "react";

import Filters from "@components/Filters";
import XIcone from "@assets/icons/XIcone";

type SidebarProps = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
} & ComponentProps<"div">;

const Sidebar: FC<SidebarProps> = ({ setIsOpen, ...props }) => {
  return (
    <>
      <div {...props}>
        <div className="flex items-center justify-between">
          <h4 className="flex items-center text-xl font-bold h-8">Filters</h4>
          <XIcone
            style={`w-5 h-5 hover:text-primary-500`}
            onClick={() => setIsOpen(false)}
          />
        </div>
        <Filters />
      </div>
    </>
  );
};

export default Sidebar;

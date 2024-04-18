import { ComponentProps, FC } from "react";

import Filters from "@components/Filters";

type SidebarProps = {} & ComponentProps<"div">;

const Sidebar: FC<SidebarProps> = ({ ...props }) => {
  return (
    <>
      <div {...props}>
        <h4 className="text-xl font-bold">Filters</h4>
        <Filters />
      </div>
    </>
  );
};

export default Sidebar;

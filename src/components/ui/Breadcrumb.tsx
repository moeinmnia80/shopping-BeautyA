import {
  Children,
  ComponentProps,
  ComponentPropsWithoutRef,
  FC,
  ReactNode,
} from "react";
import { Link } from "react-router-dom";

import ChevronLeft from "@assets/icons/ChevronLeft";

type BreadcrumbType = { children: ReactNode[] } & ComponentProps<"div">;

const Breadcrumb: FC<BreadcrumbType> = ({ children, ...props }) => {
  return (
    <>
      <div {...props}>
        {Children.map(children, (child, index) => (
          <div className="flex items-center gap-2">
            {child}
            {children.length - 1 !== index && (
              <ChevronLeft style="w-4 h-4 rotate-180" key={index} />
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export const BreadcrumbItem: FC<
  { children: ReactNode } & ComponentPropsWithoutRef<typeof Link>
> = ({ children, ...props }) => {
  return (
    <>
      <Link {...props}>{children}</Link>
    </>
  );
};

export default Breadcrumb;

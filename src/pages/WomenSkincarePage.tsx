import Breadcrumb, { BreadcrumbItem } from "@components/ui/Breadcrumb";
import Sidebar from "@components/Sidebar";

const WomenSkincarePage = () => {
  return (
    <>
      <section className="lg:container flex flex-col gap-4 w-full px-8 py-12">
        <Breadcrumb className="flex items-center gap-2 font-light capitalize">
          <BreadcrumbItem to={"/"} className="">
            home
          </BreadcrumbItem>
          <BreadcrumbItem to={"/women-skincare"} className="font-bold">
            women skincare
          </BreadcrumbItem>
        </Breadcrumb>
        <div className="flex items-center gap-2">
          <h2 className="text-2xl font-bold">Women Skincare</h2>
          <span className="text-Gray-606060 font-bold">({`${2}`})</span>
        </div>
        <div className="flex w-full">
          <Sidebar className="flex flex-col w-1/5" />
        </div>
      </section>
    </>
  );
};

export default WomenSkincarePage;

import subMenuAdsImg from "@assets/images/SubMenu.png";
import { menuItems } from "@constants/MenuItems";

const SubMenu = () => {
  return (
    <>
      <section className="fixed top-20 lg:top-24 left-0 hidden group-hover:flex w-full h-dvh bg-[#00000020] backdrop-blur-sm cursor-default ">
        <div className=" flex w-full h-fit bg-background text-black py-8">
          <div className="lg:container flex items-start justify-between px-8">
            <ul className="flex flex-col gap-1 w-full font-bold">
              <li className="hover:text-primary-500 duration-300 cursor-pointer">
                New
              </li>
              <li className="hover:text-primary-500 duration-300 cursor-pointer">
                Best Sellers
              </li>
              <li className="hover:text-primary-500 duration-300 cursor-pointer">
                Travel Size
              </li>
              <li className="hover:text-primary-500 duration-300 cursor-pointer">
                Proffesional Treatments
              </li>
              <li className="hover:text-primary-500 duration-300 cursor-pointer">
                Daily Defence
              </li>
              <li className="hover:text-primary-500 duration-300 cursor-pointer">
                Virtual Skincare Analisys
              </li>
            </ul>
            <ul className="flex flex-col gap-1 w-full capitalize font-light">
              <h4 className="font-bold">by category</h4>
              {menuItems.category.map((item) => (
                <li
                  key={item.id}
                  className="hover:text-primary-500 duration-300 cursor-pointer"
                >
                  {item.text}
                </li>
              ))}
            </ul>
            <ul className="flex flex-col gap-1.5 w-full capitalize font-light">
              <h4 className="font-bold capitalize">by skin condition</h4>
              {menuItems.skinCondition.map((item) => (
                <li
                  key={item.id}
                  className="hover:text-primary-500 duration-300 cursor-pointer"
                >
                  {item.text}
                </li>
              ))}
            </ul>
            <ul className="flex flex-col gap-1.5 w-full capitalize font-light">
              <h4 className="font-bold capitalize">collection</h4>
              {menuItems.collection.map((item) => (
                <li
                  key={item.id}
                  className="hover:text-primary-500 duration-300 cursor-pointer"
                >
                  {item.text}
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-1.5 w-full">
              <img
                src={`${subMenuAdsImg}`}
                alt="women skincare"
                className="w-full h-full object-cover"
              />
              <h4 className="w-full font-bold">
                capture totale super potent rich cream
              </h4>
              <p className="submenu__ads-text text-pretty font-light">
                Global age-defying rich cream - intense nourishment &
                revitalization
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SubMenu;

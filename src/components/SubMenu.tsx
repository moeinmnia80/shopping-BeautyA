import subMenuAdsImg from "@assets/images/SubMenu.png";

const SubMenu = () => {
  return (
    <>
      <section className="fixed top-20 lg:top-24 left-0  w-full h-max bg-background cursor-default">
        <div className="container hidden group-hover:flex items-start justify-between h-full text-black py-8">
          <ul className="flex flex-col gap-1 font-bold">
            <li>New</li>
            <li>Best Sellers</li>
            <li>Travel Size</li>
            <li>Proffesional Treatments</li>
            <li>Daily Defence</li>
            <li>Virtual Skincare Analisys</li>
          </ul>
          <ul className="flex flex-col gap-1 capitalize font-light">
            <h4 className="font-bold">by category</h4>
            <li>cleansers</li>
            <li>exfoliators</li>
            <li>toners</li>
            <li>retinols</li>
            <li>peels and masques</li>
            <li>moisturizer</li>
            <li>night cream</li>
            <li>facial oil</li>
            <li>sunscreen</li>
            <li>eye care</li>
          </ul>
          <ul className="flex flex-col gap-1 capitalize font-light">
            <h4 className="font-bold capitalize">by skin condition</h4>
            <li>brightening</li>
            <li>hydration</li>
            <li>acne</li>
            <li>anti-ageing</li>
            <li>redness</li>
            <li>sensitive skin</li>
            <li>sun protection</li>
          </ul>
          <ul className="flex flex-col gap-1 capitalize font-light">
            <h4 className="font-bold capitalize">collection</h4>
            <li>Beautya cleansing</li>
            <li>Beautya cleansing</li>
            <li>beautya light -in -white</li>
            <li>capture totale</li>
            <li>capture youth</li>
            <li>capture dreamskin</li>
            <li>one essential</li>
            <li>professional solution</li>
            <li>beautya hydra life</li>
          </ul>
          <div className="flex flex-col gap-1 w-1/5 text-wrap">
            <img
              src={`${subMenuAdsImg}`}
              alt="women skincare"
              className="w-full h-full object-cover"
            />
            <h4 className="w-full font-bold">
              capture totale super potent rich cream
            </h4>
            <p className="text-pretty text-sm font-light">
              Global age-defying rich cream - intense nourishment &
              revitalization
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default SubMenu;

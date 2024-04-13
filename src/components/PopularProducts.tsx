import { Link } from "react-router-dom";

import { popularProducts } from "@constants/PopularProducts";

const PopularProducts = () => {
  return (
    <>
      <div className="w-full md:w-4/5 mt-6 md:mt-0">
        <div className="flex items-center justify-between w-full mb-6">
          <h4 className="text-xl font-bold">Popular Products</h4>
          <Link to={`/`} className="text-sm text-primary-500 capitalize">
            view all
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 w-full gap-6">
          {popularProducts.map((item) => (
            <Link
              to={`/`}
              key={item.id}
              className="search-container__products-item w-full border-1 border-Gray-DFDFDF cursor-pointer"
            >
              <img src={`${item.img}`} alt="" className="w-full object-cover" />
              <div className="flex flex-col gap-3 bg-white pt-5 pb-2 px-4">
                <h4 className="text-primary-500">{item.title}</h4>
                <p className="text-black">{item.text}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default PopularProducts;

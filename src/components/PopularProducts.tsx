import { Link } from "react-router-dom";

const PopularProducts = () => {
  return (
    <>
      <div className="w-4/5">
        <div className="flex items-center justify-between w-full">
          <h4 className="text-xl font-bold">Popular Products</h4>
          <Link to={`/`} className="text-sm text-primary-500 capitalize">
            view all
          </Link>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default PopularProducts;

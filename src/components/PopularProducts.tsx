import { Link } from "react-router-dom";

import ProductCart from "@components/ui/ProductCart";
import popularProducts from "@constants/popularProducts";

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
          {popularProducts.map(
            (item: {
              id: number;
              img: string;
              title: string;
              text: string;
            }) => (
              <ProductCart key={item.id} data={item} />
            )
          )}
        </div>
      </div>
    </>
  );
};

export default PopularProducts;

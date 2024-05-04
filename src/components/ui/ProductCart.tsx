import { FC } from "react";
import { Link } from "react-router-dom";

import ProductsType from "src/types/Products";

type ProductCartProps = {
  data: ProductsType;
  link?: string;
};

const ProductCart: FC<ProductCartProps> = ({ data, link }) => {
  return (
    <>
      <Link
        to={link || "/"}
        className="flex flex-col w-full h-full border-1 border-Gray-DFDFDF cursor-pointer overflow-hidden"
      >
        <img
          src={`${data.picture.url}`}
          alt=""
          className="w-full h-max object-cover"
        />

        <div className="flex flex-col w-full h-full gap-2 justify-between bg-white pt-5 pb-2 px-4">
          <h4 className="text__lg font-bold text-primary-500">{data.title}</h4>
          <p className="text__md text-black">{data.description}</p>
          {data.price && <p>${data.price}</p>}
        </div>
      </Link>
    </>
  );
};

export default ProductCart;

import { FC } from "react";
import { Link } from "react-router-dom";

type ProductCartProps = {
  data: {
    id: number;
    img: string;
    title: string;
    text: string;
    price?: string;
  };
};

const ProductCart: FC<ProductCartProps> = ({ data }) => {
  return (
    <>
      <Link
        to={`/`}
        className="search-container__products-item w-full border-1 border-Gray-DFDFDF cursor-pointer"
      >
        <img src={`${data.img}`} alt="" className="w-full object-cover" />
        <div className="flex flex-col gap-3 bg-white pt-5 pb-2 px-4">
          <h4 className="text-primary-500">{data.title}</h4>
          <p className="text-black">{data.text}</p>
        </div>
      </Link>
    </>
  );
};

export default ProductCart;

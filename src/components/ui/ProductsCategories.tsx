import { Link } from "react-router-dom";
import { productsCategories } from "@constants/productsCategories";

const Categories = () => {
  return (
    <>
      <section className="lg:container flex flex-col items-center px-8 md:p-0 lg:mt-8">
        <h2 className="category-title font-bold">Products Categories</h2>
        <div className="flex items-center ite justify-center gap-5 mt-5">
          {productsCategories.map((category) => (
            <Link to={`/`} key={category.id} className="text-center">
              <img src={`${category.src}`} alt={`${category.text}`} />
              <h3 className="category-text capitalize mt-5">{`${category.text}`}</h3>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default Categories;

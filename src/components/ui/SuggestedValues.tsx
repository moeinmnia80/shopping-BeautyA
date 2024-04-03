import { valuePropositions } from "@constants/valuePropositionItems";
import { FC } from "react";

const ValueProposition: FC = () => {
  return (
    <>
      <section className="flex items-center h-max bg-primary-25">
        <div
          className={`lg:container flex flex-wrap justify-between \ 
          gap-4 w-full h-full px-8`}
        >
          {valuePropositions.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between h-full py-4"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-max h-max object-cover"
              />
              <p className="suggested-value__text text-primary-500 capitalize ml-4">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ValueProposition;

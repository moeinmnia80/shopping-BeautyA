import { valuePropositions } from "@constants/valuePropositionItems";
import { FC } from "react";

const ValueProposition: FC = () => {
  return (
    <>
      <section className="flex items-center h-24 bg-primary-25">
        <div className="container flex flex-wrap justify-between gap-x-10 w-full h-full">
          {valuePropositions.map((item) => (
            <span key={item.id} className="flex items-center py-7">
              <img
                src={item.src}
                alt={item.alt}
                className="h-full object-contain"
              />
              <p className="text-sm text-primary-500 text-nowrap capitalize ml-4">
                {item.text}
              </p>
            </span>
          ))}
        </div>
      </section>
    </>
  );
};

export default ValueProposition;

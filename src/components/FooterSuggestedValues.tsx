import { FC } from "react";

import { suggestedValues } from "@constants/suggestedValuesItems";

const SuggestedValue: FC = () => {
  return (
    <>
      <section className="flex items-center h-max bg-primary-25">
        <div
          className={`lg:container flex flex-wrap justify-between
          gap-4 w-full h-full px-8`}
        >
          {suggestedValues.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between h-full py-4"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-max h-max object-cover"
              />
              <p className="text__sm text-primary-500 capitalize ml-4">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default SuggestedValue;

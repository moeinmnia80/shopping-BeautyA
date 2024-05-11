// type ProductDetailFAQProps = {};

import Accordion, { AccordionItem } from "./ui/Accordion";

const FAQ = [
  { id: 0, trigger: "What is the best way to use this product?" },
  { id: 1, trigger: "Can this product be used on all skin types?" },
  { id: 2, trigger: "How often should I use this product?" },
  { id: 3, trigger: "How should I store this product?" },
  {
    id: 4,
    trigger: "How long will it take to see results from using this product?",
  },
  {
    id: 5,
    trigger:
      "Can this product be used in conjunction with other skincare products?",
  },
];

const ProductDetailFAQ = () => {
  return (
    <>
      <section className="lg:container pt-12 px-8">
        <h4 className="text-center text__2xl capitalize font-bold">
          Prestige lA micro-huile serum frequently asked questions
        </h4>
        <Accordion className="mt-10">
          {FAQ.map((question) => (
            <AccordionItem
              icon="plus"
              minHeight={0}
              key={question.id}
              togglerButton={false}
              value={`${question.id}`}
              trigger={question.trigger}
              contentClassName="px-5 indent-2"
              className="text-black font-light bg-white border-b-1 border-Gray-DFDFDF first:border-t-1 py-2 px-2.5"
            >
              Our product is suitable for most skin types, including normal,
              oily, dry, and combination skin. However, if you have sensitive
              skin or a skin condition, we recommend performing a patch test
              before using the product all over your face. Apply a small amount
              of the product to the inside of your elbow and wait 24 hours to
              make sure you do not have an allergic reaction or irritation. If
              you experience any discomfort, discontinue use of the product
              immediately.
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </>
  );
};

export default ProductDetailFAQ;

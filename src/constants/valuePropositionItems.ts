import img1 from "@assets/images/1.png";
import img2 from "@assets/images/2.png";
import img3 from "@assets/images/3.png";
import img4 from "@assets/images/4.png";

type valuePropositionsProps = {
  id: number;
  src: string;
  alt: string;
  text: string;
};

export const valuePropositions: valuePropositionsProps[] = [
  { id: 0, src: img1, alt: "value", text: "No tests on animals" },
  { id: 1, src: img2, alt: "value", text: "No animal-derived ingredients" },
  { id: 2, src: img3, alt: "value", text: "No gluten, or gluten byproducts" },
  { id: 3, src: img4, alt: "value", text: "Recyclable packaging" },
];

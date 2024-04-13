import img1 from "@assets/images/pp1.png";
import img2 from "@assets/images/pp2.png";
import img3 from "@assets/images/pp3.png";
import img4 from "@assets/images/pp4.png";

type popularProductsType = {
  id: number;
  img: string;
  title: string;
  text: string;
};

export const popularProducts: popularProductsType[] = [
  {
    id: 0,
    img: img1,
    title: "Beautya Prestige la Mousse Micellaire",
    text: "Plumping Gloss - Instant and Long-Term Volume Effect - 24h Hydration",
  },
  {
    id: 4,
    img: img2,
    title: "Beautya Prestige la Mousse Micellaire",
    text: "Plumping Gloss - Instant and Long-Term Volume Effect - 24h Hydration",
  },
  {
    id: 2,
    img: img3,
    title: "Beautya Prestige la Mousse Micellaire",
    text: "Plumping Gloss - Instant and Long-Term Volume Effect - 24h Hydration",
  },
  {
    id: 3,
    img: img4,
    title: "Beautya Prestige la Mousse Micellaire",
    text: "Plumping Gloss - Instant and Long-Term Volume Effect - 24h Hydration",
  },
];

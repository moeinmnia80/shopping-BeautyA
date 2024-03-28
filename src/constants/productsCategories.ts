import makeUp from "@assets/images/make up image.png";
import skincare from "@assets/images/skincare image.png";
import gifts from "@assets/images/gifts image.png";

type productsCategoriesType = { id: number; src: string; text: string };

export const productsCategories: productsCategoriesType[] = [
  { id: 0, src: makeUp, text: "women make up" },
  { id: 1, src: skincare, text: "women skincare" },
  { id: 2, src: gifts, text: "gifts & sets" },
];

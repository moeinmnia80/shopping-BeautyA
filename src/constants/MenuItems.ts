type menuItemType = {
  special: { id: number; text: string }[];
  category: { id: number; text: string }[];
  skinCondition: { id: number; text: string }[];
  collection: { id: number; text: string }[];
};
export const menuItems: menuItemType = {
  special: [
    { id: 0, text: "new" },
    { id: 1, text: "best sellers" },
    { id: 2, text: "travel size" },
    { id: 3, text: "proffesional treatments" },
    { id: 4, text: "daily defence" },
    { id: 5, text: "virtual skincare analisys" },
  ],
  category: [
    { id: 0, text: "cleansers" },
    { id: 1, text: "exfoliators" },
    { id: 2, text: "toners" },
    { id: 3, text: "retinols" },
    { id: 4, text: "peels and masques" },
    { id: 5, text: "moisturizer" },
    { id: 6, text: "night cream" },
    { id: 7, text: "facial oil" },
    { id: 8, text: "sunscreen" },
    { id: 9, text: "eye care" },
  ],
  skinCondition: [
    { id: 0, text: "brightening" },
    { id: 1, text: "hydration" },
    { id: 2, text: "acne" },
    { id: 3, text: "anti-ageing" },
    { id: 4, text: "redness" },
    { id: 5, text: "sensitive skin" },
    { id: 6, text: "sun protection" },
  ],
  collection: [
    { id: 0, text: "Beautya cleansing" },
    { id: 1, text: "beautya light -in -white" },
    { id: 2, text: "capture totale" },
    { id: 3, text: "capture youth" },
    { id: 4, text: "capture dreamskin" },
    { id: 5, text: "one essential" },
    { id: 6, text: "professional solution" },
    { id: 7, text: "beautya hydra life" },
  ],
};

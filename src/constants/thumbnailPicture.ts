import picture1 from "@assets/images/product 1.png";
import picture2 from "@assets/images/product2.png";
import picture3 from "@assets/images/product3.png";
import picture4 from "@assets/images/product4.png";
import picture5 from "@assets/images/product5.png";
import picture6 from "@assets/images/product6.png";

type thumbnailPictureType = { id: number; src: string; alt: string };

export const thumbnailPicture: thumbnailPictureType[] = [
  { id: 4, src: picture4, alt: "picture" },
  { id: 0, src: picture1, alt: "picture" },
  { id: 1, src: picture2, alt: "picture" },
  { id: 2, src: picture3, alt: "picture" },
  { id: 3, src: picture5, alt: "picture" },
  { id: 5, src: picture6, alt: "picture" },
  { id: 6, src: picture6, alt: "picture" },
];

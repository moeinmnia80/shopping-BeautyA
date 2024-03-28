import banner from "@assets/images/Banner.png";

type BannerLoop = { id: number; src: string; alt: string };

export const bannerGroup: BannerLoop[] = [
  { id: 0, src: `${banner}`, alt: "Banner" },
  { id: 1, src: `${banner}`, alt: "Banner" },
  { id: 2, src: `${banner}`, alt: "Banner" },
];

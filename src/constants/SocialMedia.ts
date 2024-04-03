import instagram from "@assets/images/instagram.png";
import facebook from "@assets/images/facebook.png";
import twitter from "@assets/images/twitter.png";
import pintrest from "@assets/images/pintrest.png";
import reddit from "@assets/images/reddit.png";
import tiktok from "@assets/images/tiktok.png";

type SocialMediaType = { id: number; src: string };

export const socialMedia: SocialMediaType[] = [
  { id: 0, src: `${instagram}` },
  { id: 1, src: `${facebook}` },
  { id: 2, src: `${twitter}` },
  { id: 3, src: `${pintrest}` },
  { id: 4, src: `${reddit}` },
  { id: 5, src: `${tiktok}` },
];

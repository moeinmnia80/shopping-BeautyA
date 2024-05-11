type ProductsType = {
  id?: number;
  title: string;
  description: string;
  price: string;
  picture: { url: string };
  slug?: string;
};

export type ProductDetailType = ProductsType & {
  type: string;
  property: string;
  advantage: string;
  details: {
    html: TrustedHTML;
  };
  howToApply: {
    html: TrustedHTML;
  };
  ingredient: {
    html: TrustedHTML;
  };
  whatMakesItAdvance: {
    html: TrustedHTML;
  };
  specification: {
    html: TrustedHTML;
  };
};

export default ProductsType;

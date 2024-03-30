import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query {
    product {
      title
      description
      price
      slug
      date
      productcImage {
        url
      }
    }
  }
`;

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

export const GET_NEW_PRODUCTS = gql`
  query {
    newProducts {
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

export const GET_BLOGS = gql`
  query {
    blogs(last: 3) {
      image {
        url
      }
      title
      about
      author
      date
      description
      slug
    }
  }
`;

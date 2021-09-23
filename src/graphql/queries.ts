import { gql } from 'graphql-request';

export const GET_PAGES = gql`
  query getPages($first: Int) {
    pages(first: $first) {
      id
      heading
      body {
        html
      }
    }
  }
`;
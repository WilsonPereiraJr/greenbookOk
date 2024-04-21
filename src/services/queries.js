import { gql } from "@apollo/client";

export const GET_SEARCH = gql`
  query Search($q: String!) {
    search(q: $q) {
      name
      group
      url
    }
  }
`;

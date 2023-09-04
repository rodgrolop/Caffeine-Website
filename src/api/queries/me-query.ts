import { gql } from "graphql-request";
import { graphQLClient } from "../client/reactQueryClient";

export const GET_ME = gql`
  query meQuery {
    me {
      id
      username
      email
      confirmed
      blocked
      role {
        name
        description
        type
      }
      blog_likes {
        data {
          id
        }
      }
    }
  }
`;

export const getMeQuery = async () => await graphQLClient.request(GET_ME);

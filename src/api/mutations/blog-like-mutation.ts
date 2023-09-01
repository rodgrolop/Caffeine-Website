import { gql } from "graphql-request";
import { graphQLClient } from "@api";
import type { blogLikeRequestInputProps } from "../blog/useBlogLikeRequestProps";

export const BLOG_LIKE_MUTATION = gql`
  mutation blogLikeMutation($id: ID!, $data: UsersPermissionsUserInput!) {
    updateUsersPermissionsUser(id: $id, data: $data) {
      data {
        attributes {
          blog_likes {
            data {
              id
            }
          }
        }
      }
    }
  }
`;

export const blogLikeMutation = async (
  blogLikeInput: blogLikeRequestInputProps
) => await graphQLClient.request(BLOG_LIKE_MUTATION, blogLikeInput);

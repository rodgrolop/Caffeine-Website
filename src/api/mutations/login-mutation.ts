import { gql } from "graphql-request";
import type { loginInputProps } from "../authentication/useAuthenticationProps";
import { graphQLClient } from "../client/reactQueryClient";

export const LOGIN_MUTATION = gql`
  mutation loginMutation($input: UsersPermissionsLoginInput!) {
    login(input: $input) {
      jwt
      user {
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
  }
`;

export const loginMutation = async (loginInput: loginInputProps) =>
  await graphQLClient.request(LOGIN_MUTATION, { input: loginInput });

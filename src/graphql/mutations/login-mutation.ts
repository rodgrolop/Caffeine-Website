import { gql } from '@apollo/client'

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
`

import { gql } from '@apollo/client'

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
`

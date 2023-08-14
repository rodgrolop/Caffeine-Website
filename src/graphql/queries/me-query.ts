import { gql } from '@apollo/client'

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
`

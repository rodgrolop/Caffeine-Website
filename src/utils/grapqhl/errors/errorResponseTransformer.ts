import { type userFetchErrorProps } from '@atoms'

export type userRequestErrorProps = {
    message?: string
    extensions?: {
        error?: {
            name: string
            message: string
            details: {
                errors?: {
                    path: string[]
                    message: string
                    name: string
                }[]
            }
        }
        code?: string
    }
}

export const errorResponseTransformer = (
    errorResponse: userRequestErrorProps[]
): { message: string | undefined; errors: userFetchErrorProps[] } => ({
    errors: errorResponse[0]?.extensions?.error?.details.errors ?? [],
    message: errorResponse[0]?.message,
})

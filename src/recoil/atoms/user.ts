import { atom } from 'recoil'
import recoilPersist from '../recoil-persist'

const USER_KEY = 'user'

type userAtomProps = {
    authenticated: boolean
    jwt?: string
    user: {
        blocked: boolean
        confirmed: boolean
        createdAt?: string
        email: string
        id: string
        provider?: string
        updatedAt?: string
        role?: string | null
        username: string
        blog_likes: string[]
    }
}

export type userFetchErrorProps = {
    message?: string
    name?: string
    path?: string[]
}

type userFetchStatusProps = {
    loading: boolean
    errors: { errors: userFetchErrorProps[]; message?: string } | null
}

const defaultUserFetchStatus = {
    loading: false,
    errors: null,
}

export const userAtom = atom<userAtomProps | null>({
    key: USER_KEY,
    default: null,
    effects: [recoilPersist(USER_KEY)],
})

export const userFetchStatusAtom = atom<userFetchStatusProps>({
    key: 'userFetchStatus',
    default: defaultUserFetchStatus,
})

export const userLoginStatusAtom = atom<userFetchStatusProps>({
    key: 'userLoginStatus',
    default: defaultUserFetchStatus,
})

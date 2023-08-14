import { atom } from 'recoil'

type layoutAtomProps = {
    isDrawerOpen: boolean
}

const defaultState: layoutAtomProps = {
    isDrawerOpen: false,
}

export const layoutAtom = atom({
    key: 'layout',
    default: defaultState,
})

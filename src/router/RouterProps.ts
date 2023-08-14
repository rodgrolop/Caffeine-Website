export interface ProtectedRoutesProps {
    isAuthenticated: boolean
    authenticationPath: string
    outlet: JSX.Element
}

export interface AuthState {
    isAuth: boolean
}

export interface AuthActions {
    toggleAuth: (isAuth: boolean) => void;
}
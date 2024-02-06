import { create } from 'zustand';
import {AuthState, AuthActions} from "./types";

export const useAuthStore = create<AuthState & AuthActions>()((set) => ({
    isAuth: false,
    toggleAuth: (isAuth: boolean) => set(() => ({isAuth: !isAuth})),
}));
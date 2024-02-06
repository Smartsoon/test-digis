'use client'

import { useAuthStore } from "@stores/user";
import { useRouter } from "next/navigation";
import { unAuthorizedRoute } from "@routes/roures-all";
import { usePathname } from 'next/navigation'
import { useEffect } from "react";

export const Auth: React.FC = () => {
    const { isAuth } = useAuthStore();
    const router = useRouter()
    const pathname = usePathname()

    useEffect(() => {
        if (!isAuth && pathname && pathname !== unAuthorizedRoute) {
            router.push(unAuthorizedRoute)
        }
    }, [pathname, isAuth])

    return <></>
}
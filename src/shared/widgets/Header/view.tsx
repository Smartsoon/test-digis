'use client'

import { Box } from "@chakra-ui/react";
import { StyledButton } from "@ui/Button";
import { useAuthStore } from "@stores/user";
import { useRouter } from "next/navigation";
import { listRoute } from "@routes/roures-all";

export const Header: React.FC = ({}) => {
    const { toggleAuth, isAuth } = useAuthStore();
    const router = useRouter()
    const onToggleAuth = () => {
        toggleAuth(isAuth)
        if (!isAuth) {
            router.push(listRoute)
        }
    }

    return <header>
        <Box height={100}
             p={8}
             backgroundColor={'lightgray'}
             display={'flex'}
             justifyContent={'end'}
             alignItems={'center'}>
            <StyledButton
                title={isAuth ? 'Log Out' : 'Log In'}
                onClick={onToggleAuth}
            />
        </Box>
    </header>
}
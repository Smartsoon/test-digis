'use client'

import { ChakraProvider } from '@chakra-ui/react'

export function ChakraTheme({ children }: { children: React.ReactNode }) {
    return <ChakraProvider>{children}</ChakraProvider>
}
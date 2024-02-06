'use client'

import React from "react";
import { Box, Text } from "@chakra-ui/react";

export const Unauthorized: React.FC = ({}) => {
    return (
        <Box mt={12} display={'flex'} flexDirection={'column'} alignContent={'center'} alignItems={'center'}>
           <Text fontSize='3xl'>
               Please authorize
           </Text>
        </Box>
    );
};
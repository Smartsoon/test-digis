import React from 'react';
import { StyledButtonProps } from './types';
import { Button } from "@chakra-ui/react";

export const StyledButton: React.FC<StyledButtonProps> = ({
    title,
    type,
    onClick
}) => {
    return (
        <Button variant="outline"
                colorScheme="orange"
                type={type}
                onClick={onClick}
        >
            {title}
        </Button>
    );
};
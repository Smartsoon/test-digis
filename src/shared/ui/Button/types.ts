import {ButtonProps} from "@chakra-ui/react";

export interface StyledButtonProps {
    title: string;
    type?: ButtonProps['type']
    onClick?: () => void
}
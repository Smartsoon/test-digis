import {CardBody, Text, Card as ChakraCard} from "@chakra-ui/react";
import React from "react";

export const Card: React.FC<{title: string}> = ({title}) => {
    return <ChakraCard borderWidth={1} width={200} align={'center'}>
        <CardBody >
            <Text >{title}</Text>
        </CardBody>
    </ChakraCard>
}
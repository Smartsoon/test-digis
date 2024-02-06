'use client'

import React from "react";
import { Box, List, ListItem } from "@chakra-ui/react";
import { useItemsStore } from "@stores/item";
import { Card } from "./components/Card/vies";
import { StyledButton } from '@ui/Button'
import {useRouter} from "next/navigation";
import { addRoute } from "@routes/roures-all";

export const ItemList: React.FC = ({}) => {
    const {items} = useItemsStore();
    const router = useRouter()
    const onButtonClick = () => {
        router.push(addRoute)
    }
    return (
        <Box mt={12} display={'flex'} flexDirection={'column'} alignContent={'center'} alignItems={'center'}>
            <List spacing={5} >
                {items.map(item => {
                    return <ListItem key={item.id}>
                        <Card title={item.title}/>
                    </ListItem>
                })}
            </List>
            <Box mt={12} display={'flex'} justifyContent={'center'}>
                <StyledButton title={'To add Page'} onClick={onButtonClick}/>
            </Box>
        </Box>
    );
};
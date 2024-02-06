'use client'

import React from "react";
import {useRouter} from "next/navigation";
import type { FormData } from "./types";
import { Box } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { itemFormSchema } from "./validation";
import { useItemsStore } from "@stores/item";
import { StyledButton } from "@ui/Button";
import { listRoute } from "@routes/roures-all";
import {FormInput} from "@ui/FormInput";

export const AddItemForm: React.FC = ({}) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(itemFormSchema),
    });
    const router = useRouter()

    const { createItem } = useItemsStore();

    const onSubmit = (data: FormData) => {
        createItem({
            title: data.title,
            id: Date.now().toString()
        });
        router.push(listRoute)
        reset();
    };

    return (
        <Box mt={12} display={'flex'} justifyContent={'center'}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormInput name={"title"}
                           errors={errors}
                           register={register}
                />
                <Box mt={12} display={'flex'} justifyContent={'center'}>
                    <StyledButton title={'Add'}
                                  type={'submit'}
                    />
                </Box>
            </form>
        </Box>
    );
};
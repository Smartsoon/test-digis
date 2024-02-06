import React from 'react';
import { FormInputProps } from './types';
import {FormControl, FormErrorMessage, Input} from "@chakra-ui/react";

export const FormInput = <TFormValues extends Record<string, unknown>>({
   name,
   register,
   rules,
   errors,
   ...props
}: FormInputProps<TFormValues>): JSX.Element => {
    return (
        <FormControl isInvalid={Boolean(errors?.title)}>
            <Input {...props} {...(register && register(name, rules))}/>
            <FormErrorMessage>{errors?.title && errors?.title.message?.toString()}</FormErrorMessage>
        </FormControl>
    );
};
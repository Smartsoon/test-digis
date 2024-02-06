import {UseFormRegister, Path, RegisterOptions, FieldValues} from 'react-hook-form';
import {InputProps} from "@chakra-ui/react";
import {FieldErrors} from "react-hook-form";

export type FormInputProps<TFormValues extends FieldValues> = {
    name: Path<TFormValues>;
    rules?: RegisterOptions;
    register?: UseFormRegister<TFormValues>;
    errors?: FieldErrors<TFormValues>
} & Omit<InputProps, 'name'>;
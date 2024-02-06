import { z } from "zod";
import {
    validationMaxText,
    validationMaxValue,
    validationMinText,
    validationMinValue
} from "@widgets/AddItemForm/constants";

export const itemFormSchema = z
    .object({
        title: z
            .string()
            .min(validationMinValue, { message: validationMinText })
            .max(validationMaxValue, { message: validationMaxText }),
    })
    .required();

export type FormData = z.infer<typeof itemFormSchema>;
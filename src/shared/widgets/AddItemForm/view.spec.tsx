import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { AddItemForm } from "./view";
import {
    validationMaxValue,
    validationMinValue,
    validationMaxText,
    validationMinText
} from "@widgets/AddItemForm/constants";

jest.mock("next/navigation", () => ({
    useRouter() {
        return {
            prefetch: () => null
        };
    }
}));

describe('Components exist', () => {
    beforeEach(() => {
        render(<AddItemForm/>)
    });
    test('Button', () => {
        const buttonElement = screen.getByText('Add')
        expect(buttonElement).toBeInTheDocument()
    })

    test('Field', () => {
        const fieldElement = screen.getByRole('textbox')
        expect(fieldElement).toBeInTheDocument()
    })
})

describe('Errors handle', () => {
    beforeEach(() => {
        render(<AddItemForm/>)
    });
    const minValue = 'qw'
    const maxValue = 'qwertyuiop1234567'
    test(`Less than ${validationMinValue}`, async () => {
        userEvent.setup()
        const fieldElement = screen.getByRole('textbox')
        await userEvent.type(fieldElement, minValue)
        expect(fieldElement).toHaveValue(minValue)

        const buttonElement = screen.getByText('Add')
        await userEvent.click(buttonElement)

        const errorMessage = screen.getByText(validationMinText)
        expect(errorMessage).toBeInTheDocument()
    })

    test(`More than ${validationMaxValue}`, async () => {
        userEvent.setup()
        const fieldElement = screen.getByRole('textbox')
        await userEvent.type(fieldElement, maxValue)
        expect(fieldElement).toHaveValue(maxValue)

        const buttonElement = screen.getByText('Add')
        await userEvent.click(buttonElement)

        const errorMessage = screen.getByText(validationMaxText)
        expect(errorMessage).toBeInTheDocument()
    })
})


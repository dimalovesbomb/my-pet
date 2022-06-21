import { fireEvent, render, screen } from "@testing-library/react"
import { UseReducer } from "./UseReducer";
import { withDelay } from '../../testHelpers';

test('useReducer page: sets value to a firstName', async () => {
    render(<UseReducer/>);
    const firstNameInput = screen.getByTestId('firstName');
    const firstName = 'Dmitrii';

    await withDelay(firstName, letter => {
        fireEvent.change(firstNameInput, { target: { value: firstNameInput.value + letter }})
    });
    
    expect(firstNameInput).toHaveValue(firstName);
});

test('useReducer page: sets value to a lastName', async () => {
    render(<UseReducer/>);
    const lastNameInput = screen.getByTestId('lastName');
    const lastName = 'Kupriunin';

    await withDelay(lastName, letter => {
        fireEvent.change(lastNameInput, { target: { value: lastNameInput.value + letter }});
    });
    
    expect(lastNameInput).toHaveValue(lastName);
});

test('useReducer page: sets value to a birthday', async () => {
    render(<UseReducer/>);
    const birthdayInput = screen.getByTestId('birthday');
    const birthday = '13.12.1994';

    await withDelay(birthday, letter => {
        fireEvent.change(birthdayInput, { target: { value: birthdayInput.value + letter }});
    });
    
    expect(birthdayInput).toHaveValue(birthday);
});

test('useReducer page: clicks button and renders results', () => {
    render(<UseReducer/>);
    const submitButton = screen.getByLabelText('Submit');
    fireEvent.click(submitButton);

    const resultsDiv = screen.getByTestId('divResults');
    expect(resultsDiv).toBeInTheDocument();
});

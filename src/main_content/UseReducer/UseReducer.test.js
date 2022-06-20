import { fireEvent, render, screen } from "@testing-library/react"
import { UseReducer } from "./UseReducer";
import { withDelay } from '../../testHelpers';

test('useReducer page: sets value to a firstName', async () => {
    render(<UseReducer/>);
    const firstNameInput = screen.getByText(/First name/i);
    const firstName = 'Dmitrii';

    await withDelay(firstName, letter => {
        fireEvent.change(firstNameInput.children[0], { target: { value: firstNameInput.children[0].value + letter }})
    });
    
    expect(firstNameInput.children[0]).toHaveValue(firstName);
});

test('useReducer page: sets value to a lastName', async () => {
    render(<UseReducer/>);
    const lastNameInput = screen.getByText(/Last name/i);
    const lastName = 'Kupriunin';

    await withDelay(lastName, letter => {
        fireEvent.change(lastNameInput.children[0], { target: { value: lastNameInput.children[0].value + letter }});
    });
    
    expect(lastNameInput.children[0]).toHaveValue(lastName);
});

test('useReducer page: sets value to a birthday', async () => {
    render(<UseReducer/>);
    const birthdayInput = screen.getByText(/Birthday/i);
    const birthday = '13.12.1994';

    await withDelay(birthday, letter => {
        fireEvent.change(birthdayInput.children[0], { target: { value: birthdayInput.children[0].value + letter }});
    });
    
    expect(birthdayInput.children[0]).toHaveValue(birthday);
});

test('useReducer page: clicks button and renders results', () => {
    render(<UseReducer/>);
    const submitButton = screen.getByText('Submit');
    fireEvent.click(submitButton);

    const resultsDiv = screen.getByTestId('divResults');
    expect(resultsDiv).toBeInTheDocument();
});

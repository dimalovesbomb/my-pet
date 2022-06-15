import { fireEvent, render, screen } from "@testing-library/react"
import { withDelay } from '../../setupTests';
import { CustomHook } from "./CustomHook";

test('customHook page: types to input and renders result', async () => {
    render(<CustomHook />);
    const inputEl = screen.getByText(/Enter with ',' :/i).nextSibling;
    const text = 'a,b,c,d'; // no spaces in purpose
    const textArr = await withDelay(text, letter => {
        fireEvent.change(inputEl, { target: { value: inputEl.value + letter }});
        return letter;
    });

    const finalStringResult = textArr.filter(i => i !== ',').join(', ');
    const resultEl = screen.getByTestId('tranformResult');
    
    expect(resultEl).toBeInTheDocument(finalStringResult);
});
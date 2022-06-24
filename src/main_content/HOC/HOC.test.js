import { fireEvent, render, screen } from '@testing-library/react';
import { withDelay } from '../../testHelpers';
import { HOC } from './HOC';

describe('HOC page:', () => {
    test('main', async () => {
        render(<HOC />);

        const inputEl = screen.getByTestId('hoc-input');
        const testString = 'abcdefg';
        const textArr = await withDelay(testString, (letter) => {
            fireEvent.change(inputEl, {
                target: { value: inputEl.value + letter },
            });
            return letter;
        });
        const textString = textArr.join('');

        const HOCnormalEl = screen.getByText(/Normal result:/i);
        const HOCnormalResultEl = screen.getByTestId('hoc-normal-result');
        const HOCuppercaseEl = screen.getByText(/Uppercase result:/i);
        const HOCuppercaseResultEl = screen.getByTestId('hoc-uppercase-result');

        expect(HOCnormalEl).toBeInTheDocument();
        expect(HOCuppercaseEl).toBeInTheDocument();

        expect(HOCnormalResultEl).toHaveTextContent(textString);
        expect(HOCuppercaseResultEl).toHaveTextContent(
            textString.toUpperCase()
        );
    });
});

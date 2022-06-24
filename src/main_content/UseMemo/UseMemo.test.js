import { fireEvent, render, screen } from '@testing-library/react';
import { withDelay } from '../../testHelpers';
import { withWholeContext } from '../../testHelpers';
import { UseMemo } from './UseMemo';

describe('useMemo page:', () => {
    test('clicks a button and counter increases', async () => {
        const Content = withWholeContext(UseMemo);
        render(<Content />);

        const counterButtonEl = screen.getByTestId('usememo-counter-button');
        fireEvent.click(counterButtonEl);

        const resultEl = screen.getByTestId('usememo-counter-result');
        expect(resultEl).toHaveTextContent(/Counter : 1/i);

        fireEvent.click(counterButtonEl);
        expect(resultEl).toHaveTextContent(/Counter : 2/i);
    });

    test('inputs and changes output', async () => {
        const Content = withWholeContext(UseMemo);
        render(<Content />);

        const inputEl = screen.getByPlaceholderText('Enter a number');
        const testString = '12345';
        await withDelay(testString, (letter) => {
            fireEvent.change(inputEl, {
                target: { value: inputEl.value + letter },
            });
        });

        const resultEl = screen.getByTestId('usememo-result');
        const resultOfUserOperation = '152399025';
        expect(resultEl).toHaveTextContent(resultOfUserOperation);
    });
});

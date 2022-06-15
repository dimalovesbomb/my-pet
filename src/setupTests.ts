// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

function randomIntFromInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

/**
 * Creates delays for "closer to real user" input experience. 
 * @param iterable string or array to iterate
 * @param cb (item) => {...} callback used for delayed call
 * @param delay (optional) if specified, fixes a period for callback call
 * @returns array of items
 * 
 * @example await withDelay('string',
 *  letter => fireEvent.change(input, { target: { value: input.value + letter }})
 * );
 * @example const delayed = await withDelay('string',
 *  letter => {
 *      fireEvent.change(input, { target: { value: input.value + letter }});
 *      return letter;
 *  }, 50);
 *  delayed === ['s', 't', 'r', 'i', 'n', 'g']
 */
export async function withDelay(iterable: unknown[] | string, cb: (a: unknown) => unknown, delay?: number) {
    enum RandomMS { min = 1, max = 200 };
    const promises = [];

    for (const item of iterable) {
        let interval = delay ? delay : randomIntFromInterval(RandomMS.min, RandomMS.max);
        const promise = await new Promise(resolve => {
            setTimeout(() => resolve(cb(item)), interval);
        });

        promises.push(promise);
    }

    return await Promise.all(promises);
}
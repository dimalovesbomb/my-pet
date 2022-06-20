import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import React, { ComponentType } from 'react';

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
        const interval = delay ? delay : randomIntFromInterval(RandomMS.min, RandomMS.max);
        const promise = await new Promise(resolve => {
            setTimeout(() => resolve(cb(item)), interval);
        });

        promises.push(promise);
    }

    return Promise.all(promises);
}

/**
 * HOC that recreates state and router environment for tested component
 * @param Components React-children
 * @returns your passed element(s) with Router and Store as a React.Element
 */
export function withWholeContext<T>(Components: ComponentType<unknown>) {
    return (props: T) => {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Components {...props}/>
                </BrowserRouter>
            </Provider>
        )
    }
}
import React, { SyntheticEvent, useReducer, useState } from "react";
import { Input } from "../../components/Input";
import { MySyntaxHighlighter } from "../../components/MySyntaxHighlighter";
import { localize } from "../../localization";
import { codeExample } from "./useReducer-code-example";
import './UseReducer.scss';

const currentPath = '/useReducer';

enum ActionType {
    FirstName = 'firstName',
    LastName = 'lastName',
    Birthday = 'birthday'
}

interface Action {
    type: ActionType;
    payload: string;
}

const initState = { firstName: '', lastName: '', birthday: '' };

function reducer(state: typeof initState, action: Action) {
    switch (action.type) {
        case ActionType.FirstName:
            return { ...state, firstName: action.payload };

        case ActionType.LastName:
            return { ...state, lastName: action.payload };

        case ActionType.Birthday:
            return { ...state, birthday: action.payload };

        default:
            return state;
    }
}

export const UseReducer: React.FC = () => {
    const [{ firstName, lastName, birthday }, dispatch] = useReducer(reducer, initState);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const submitHandler = (e: SyntheticEvent<never>) => {
        e.preventDefault();

        const formElementsArray: Array<HTMLInputElement | HTMLButtonElement> = Array.from(e.currentTarget);
        const enumValues: string[] = Object.values(ActionType);

        formElementsArray.forEach(el => {
            if (el && enumValues.includes(el.id)) {
                dispatch({
                    type: el.id as ActionType,
                    payload: el.value
                });
            }
        });

        setIsSubmitted(true);
    }

    const onInputChange = (e: SyntheticEvent<HTMLInputElement>) => {
        dispatch({
            type: e.currentTarget.id as ActionType,
            payload: e.currentTarget.value
        });
    }

    return (
        <div className="main_container">
            <h3>{localize(currentPath, 'page header')}</h3>
            <article className="use-reduсer_text">
                <p>{localize(currentPath, 'usage explanation')}</p>
                <MySyntaxHighlighter codeExample={codeExample} />
                <div className="use-reducer_example">
                    <form onSubmit={submitHandler}>
                        <Input
                            className="use-reducer_example_input"
                            id={ActionType.FirstName}
                            label="First name"
                            onChange={onInputChange}
                            value={firstName}
                        />
                        <Input
                            className="use-reducer_example_input"
                            id={ActionType.LastName}
                            label="Last name"
                            onChange={onInputChange}
                            value={lastName}
                        />
                        <Input
                            className="use-reducer_example_input"
                            id={ActionType.Birthday}
                            label="Birthday"
                            onChange={onInputChange}
                            value={birthday}
                        />
                        <button className="button" type="submit" aria-label="Submit" onSubmit={submitHandler}>Submit</button>
                    </form>
                    {
                        isSubmitted &&
                        <div data-testid="divResults">
                            <p>{firstName}</p>
                            <p>{lastName}</p>
                            <p>{birthday}</p>
                        </div>
                    }
                </div>
            </article>
        </div>
    );
}
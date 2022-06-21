import React from "react";
import { useLocation } from "react-router-dom";
import { localize } from "../../localization";
import { UseCallbackExampleParent } from "./UseCallbackExample";
import './useCallback.scss'
import { MySyntaxHighlighter } from "../../components/MySyntaxHighlighter";

const currentPath = '/customHook';

const codeExample = `
import React from "react";
import UseCallbackExampleParent from "./UseCallbackExampleChild";

export const UseCallback: React.FC = () => {
    return (
        <div className="usecallback-container main_container">
            <h3 className="usecallback-container_h3">{localize(location.pathname, 'useCallback text header')}</h3>
            <article className="usecallback-container_article">
                <p>{localize(location.pathname, 'useCallback defenition')}</p>
                <SyntaxHighlighter language="javascript" style={dark}>{codeExample}</SyntaxHighlighter>
                <div className="usecallback-container_article_self-example">
                    <UseCallbackExampleParent />
                </div>
            </article>
        </div>
    );
}

// ANOTHER FILE

import React, { useCallback, useState } from "react";
import UseCallbackExampleChild from "./UseCallbackExampleChild";

export const UseCallbackExampleParent: React.FC = () => {
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(0);

    const increaseCount = useCallback(() => {
        const timeInvoked = Date.now();
        let useless = [];
        for (let i = 0; i < 19191919; i++) {
            useless.push(i);
        }

        console.log('incrementCount was invoking for (Date.now() - timeInvoked) ms.');
        setCount(count + 1);
    }, [count]);

    const increaseNumber = () => setNumber(number + 1);

    return (
        <div className="usecallback-example">
            <p>header</p>
            <p>This is parent</p>
            <div className="usecallback-example_child_content">
                <span>Number value: {number}</span>
                <button onClick={increaseNumber}>Increment (NO useCallback trigger)</button>
            </div>
            <UseCallbackExampleChild
                count={count}
                increaseCount={increaseCount}
            />
        </div>
    );
}

// ANOTHER FILE

import React from "react";

interface ChildProps {
    count: number;
    increaseCount: () => void;
}

const UseCallbackExampleChild: React.FC<ChildProps> = ({ count, increaseCount }) => {
    console.log('child rendered');

    return (
        <div className="usecallback-example_child">
            <p>This is child</p>
            <div className="usecallback-example_child_content">
                <span>Increment value: {count}</span>
                <button onClick={increaseCount}>Increment (useCallback trigger)</button>
            </div>
            
        </div>
    );
}

export default React.memo(UseCallbackExampleChild);
`;


export const UseCallback: React.FC = () => {
    return (
        <div className="usecallback-container main_container">
            <h3 className="usecallback-container_h3">{localize(location.pathname, 'useCallback text header')}</h3>
            <article className="usecallback-container_article">
                <p>{localize(location.pathname, 'useCallback defenition')}</p>
                <MySyntaxHighlighter codeExample={codeExample} />
                <div className="usecallback-container_article_self-example">
                    <UseCallbackExampleParent />
                </div>
            </article>
        </div>
    );
}
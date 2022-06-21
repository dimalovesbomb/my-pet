import React from "react";
import { MySyntaxHighlighter } from "../../components/MySyntaxHighlighter";
import { localize } from "../../localization";
import { UseMemoExample } from "./UseMemoExample";
import './useMemo.scss';

const currentPath = '/useMemo';

const codeExample = `
import React, { useMemo, useState } from "react";

export const UseMemoExample: React.FC = () => {
    const [number, setNumber] = useState(0);
    const [counter, setCounter] = useState(0);

    const squaredNum = useMemo(() => squareNum(number), [number]);

    const onChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
      setNumber(+e.currentTarget.value);
    };
    const counterHander = () => setCounter(counter + 1);

    return (
        <div className="usememo-example">
            <p>useMemo action example:</p>
            <input
                type="text"
                placeholder="Enter a number"
                value={number}
                onChange={onChangeHandler} />

            <div>OUTPUT: {squaredNum}</div>
            <button onClick={counterHander}>Counter ++</button>
            <div>Counter : {counter}</div>
        </div>
    );
}

function squareNum(number: number) {
    return Math.pow(number, 2);
}
`;

export const UseMemo: React.FC = () => {
    return (
        <div className="usememo-container main_container">
            <h3 className="usememo-container_h3">{localize(currentPath, 'useMemo text header')}</h3>
            <article className="usememo-container_article">
                <p>{localize(currentPath, 'useMemo defenition')}</p>
                <MySyntaxHighlighter codeExample={codeExample} />
                <div className="usememo-container_article_self-example">
                  <UseMemoExample />
                </div>
            </article>
        </div>
    );
}
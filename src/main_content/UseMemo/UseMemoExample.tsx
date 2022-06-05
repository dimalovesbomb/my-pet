import React, { useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { localize } from "../../localization";

export const UseMemoExample: React.FC = () => {
    const location = useLocation()
    const [number, setNumber] = useState(0);
    const [counter, setCounter] = useState(0);

    const squaredNum = useMemo(() => squareNum(number), [number]);

    const onChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
        if (Number.isNaN(+e.currentTarget.value)) {
            return;
        }

        setNumber(+e.currentTarget.value);
    }
    const counterHander = () => setCounter(counter + 1);

    return (
        <div className="usememo-example">
            <p>{localize(location.pathname, 'useMemo action example')}</p>
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
import React, { useCallback, useState } from "react";
import { localize } from "../../localization";
import { currentPath } from "./UseCallback";
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

        console.log(`incrementCount was invoking for ${Date.now() - timeInvoked}ms.`);
        setCount(count + 1);
    }, [count]);
    
    const increaseNumber = () => setNumber(number + 1);

    return (
        <div className="usecallback-example">
            <p>{localize(currentPath, 'useCallback action example')}</p>
            <p>{localize(currentPath, 'parent')}</p>
            <div className="usecallback-example_child_content">
                <span>Number value: {number}</span>
                <button className="button" onClick={increaseNumber}>Increment (NO useCallback trigger)</button>
            </div>
            <br/>
            <div className="usecallback-example_child">
                <UseCallbackExampleChild
                    count={count}
                    increaseCount={increaseCount}
                />
            </div>
        </div>
    );
}


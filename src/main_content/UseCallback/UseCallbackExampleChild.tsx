import React from "react";
import { localize } from "../../localization";
import { currentPath } from "./UseCallback";

interface ChildProps {
    count: number;
    increaseCount: () => void;
}

const UseCallbackExampleChild: React.FC<ChildProps> = ({ count, increaseCount }) => {
    console.log('child rendered');

    return (
        <>
            <p>{localize(currentPath, 'child')}</p>
            <div className="usecallback-example_child_content">
                <span>Increment value: {count}</span>
                <button className="button" onClick={increaseCount}>Increment (useCallback trigger)</button>
            </div>
            
        </>
    );
}

export default React.memo(UseCallbackExampleChild);
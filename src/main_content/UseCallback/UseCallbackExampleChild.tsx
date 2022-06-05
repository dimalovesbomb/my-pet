import React from "react";
import { useLocation } from "react-router-dom";
import { localize } from "../../localization";

interface ChildProps {
    count: number;
    increaseCount: () => void;
}

const UseCallbackExampleChild: React.FC<ChildProps> = ({ count, increaseCount }) => {
    console.log('child rendered');
    const location = useLocation();

    return (
        <>
            <p>{localize(location.pathname, 'child')}</p>
            <div className="usecallback-example_child_content">
                <span>Increment value: {count}</span>
                <button onClick={increaseCount}>Increment (useCallback trigger)</button>
            </div>
            
        </>
    );
}

export default React.memo(UseCallbackExampleChild);
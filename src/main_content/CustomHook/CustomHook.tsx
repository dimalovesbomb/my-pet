import React, { SyntheticEvent, useState } from "react";

type StringToArrayLike = [string, string, (e: SyntheticEvent<HTMLInputElement>) => void];

const currentPath = '/customHook';

export const CustomHook: React.FC = () => {
    const [inputVal, transformedVal, setInputVal] = useStringToArrayLike();

    return (
        <div className="main_container">
            <div>
                <span>Enter with ',' : </span>
                <input type="text" value={inputVal} onChange={setInputVal} />
            </div>
            <div>
                <span data-testid="tranformResult">let result{inputVal && ' = '}{transformedVal};</span>
            </div>
        </div>
    );
}

function useStringToArrayLike(): StringToArrayLike {
    const [value, setValue] = useState('');
    const [transformedValue, setTransformedValue] = useState('');

    const transform = (e: SyntheticEvent<HTMLInputElement>) => {
        const modifiedString = e.currentTarget.value.split(',').join(', ');

        setValue(e.currentTarget.value);
        setTransformedValue(`[${modifiedString}]`);
    }

    return [value, transformedValue, transform];
}
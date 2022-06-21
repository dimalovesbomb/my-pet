import React from "react";

interface InputProps {
    label: string;
    id: string;
    onChange: any;
    value: string;
    className?: string;
    testId?: string;
}

export const Input: React.FC<InputProps> = ({ label, id, onChange, value, className = '', testId = id }) => {
    return (
        <label className={className}>{label}: 
            <input type="text" value={value} onChange={onChange} id={id} data-testid={testId} />
        </label>
    );
}
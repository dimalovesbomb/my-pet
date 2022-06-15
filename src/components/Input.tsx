import React from "react";

interface InputProps {
    label: string;
    id: string;
    onChange: any;
    value: string;
}

export const Input: React.FC<InputProps> = ({ label, id, onChange, value }) => {
    return (
        <label>{label}: <input type="text" value={value} onChange={onChange} id={id} /></label>
    );
}
import React, { ComponentType, useEffect, useState } from "react";

interface SpanProps {
    text: string;
}

export const HOC: React.FC = () => {
    const SpanWithUppercase = withUppercaseText(Span);

    return (
        <div className="main_container">
            <Span text="lowercase"/>
            <SpanWithUppercase text="uppercase"/>
        </div>
    );
}

function withUppercaseText(Component: ComponentType<SpanProps>) {
    return (hocProps: SpanProps) => {
        const [uppercased, setUppercased] = useState(hocProps.text);

        useEffect(() => {
            setUppercased(hocProps.text.toUpperCase());
        }, [hocProps.text]);
        
        return <Component {...hocProps} text={uppercased} />;
    }
}

const Span: React.FC<SpanProps> = ({ text }) => {
    return <span>{text}</span>;
};
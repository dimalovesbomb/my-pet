import React, { ComponentType, SyntheticEvent, useEffect, useState } from "react";

interface SpanProps {
    text: string;
}

const currentPath = '/hoc';

export const HOC: React.FC = () => {
    const [value, setValue] = useState('');
    const SpanWithUppercase = withUppercaseText(Span);

    return (
        <div className="main_container">
            <div>
                <input
                    data-testid="hoc-input"
                    value={value}
                    onChange={(e: SyntheticEvent<HTMLInputElement>) => setValue(e.currentTarget.value)}
                />
            </div>
            <div>
                <p>
                    Normal result: <Span text={value} data-testid="hoc-normal-result"/>
                </p>
            </div>
            <div>
                <p>
                    Uppercase result: <SpanWithUppercase text={value} data-testid="hoc-uppercase-result"/>
                </p>
            </div>
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

const Span: React.FC<SpanProps> = ({ text, ...rest }) => {
    return <span {...rest}>{text}</span>;
};
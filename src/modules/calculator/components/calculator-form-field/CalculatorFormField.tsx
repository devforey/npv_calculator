import React from 'react';
import Input from '../../../../components/input/Input';
import classNames from 'classnames';

interface CalculatorFormField {
    label: String;
    placeholder: string;
    containerClassName?: string;
}

const CalculatorFormField = ({
    label,
    containerClassName,
    ...props
}: CalculatorFormField & React.InputHTMLAttributes<HTMLElement>) => {
    const containerClassNames = classNames(
        'mb-4',
        containerClassName
    );

    return <div className={containerClassNames}>
        <label className="
            block 
            text-gray-700 
            text-sm 
            font-bold mb-2
        ">
            {label}
        </label>
        <Input
            type="number"
            {...props}
        />
    </div>
};

export default CalculatorFormField;
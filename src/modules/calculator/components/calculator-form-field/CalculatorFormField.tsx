import React from 'react';
import Input from '../../../../components/input/Input';

interface CalculatorFormField {
    label: String;
    placeholder: string;
}

const CalculatorFormField = ({
    label,
    className,
    placeholder,
    ...props
}: CalculatorFormField & React.InputHTMLAttributes<HTMLElement>) => {
    return <div className="mb-4">
        <label className="
            block 
            text-gray-700 
            text-sm 
            font-bold mb-2
        ">
            {label}
        </label>
        <Input
            id="initialInvestment"
            type="number"
            placeholder={placeholder}
            {...props}
        />
    </div>
};

export default CalculatorFormField;
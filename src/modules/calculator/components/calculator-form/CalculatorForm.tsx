import React, { ChangeEvent } from 'react';
import CalculatorFormField from '../calculator-form-field/CalculatorFormField';

interface CalculatorFormProps {
    formData: CalculatorFormData,
    onChange: OnCalculatorFormChange
}

export interface CalculatorFormData {
    initialInvestment?: number,
    rate?: number,
    cashFlow1?: number,
    cashFlow2?: number,
    cashFlow3?: number,
}

export type OnCalculatorFormChange = (calculatorFormData: CalculatorFormData) => void;

const CalculatorForm = ({ formData, onChange }: CalculatorFormProps) => {
    
    const render = () => {
        return <div className="
            overflow-auto

            bg-gray-300
            w-full
            h-full

            flex
            flex-col
            items-center
            justify-center
        ">
            <form 
                className="
                    bg-white
                    shadow-md
                    rounded
                    p-5
                    w-6/12
                "
                action="">
                
                <CalculatorFormField
                    name="initialInvestment"
                    label="Initial Investment"
                    placeholder="Initial Investment"
                    value={formData.initialInvestment}
                    onChange={handleFormChange}
                />

                <CalculatorFormField
                    name="rate"
                    label="Rate"
                    placeholder="Rate"
                    value={formData.rate}
                    onChange={handleFormChange}
                />

                <CalculatorFormField
                    name="cashFlow1"
                    label="Cashflow 1"
                    placeholder="Cashflow 1"
                    value={formData.cashFlow1}
                    onChange={handleFormChange}
                />

                <CalculatorFormField
                    name="cashFlow2"
                    label="Cashflow 2"
                    placeholder="Cashflow 2"
                    value={formData.cashFlow2}
                    onChange={handleFormChange}
                />

                <CalculatorFormField
                    name="cashFlow3"
                    label="Cashflow 3"
                    placeholder="Cashflow 3"
                    value={formData.cashFlow3}
                    onChange={handleFormChange}
                />

            </form>
        </div>;
    };

    const handleFormChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newFormData = { 
            ...formData, 
            [event.target.name]: event.target.value
        } as CalculatorFormData;
        onChange(newFormData);
    };

    return render();

};

export default CalculatorForm;
import React from 'react';
import CalculatorFormField from '../calculator-form-field/CalculatorFormField';

const CalculatorPanel = () => {
    return <div className="
        overflow-auto

        bg-gray-300
        w-full
        h-full

        flex
        flex-column
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
                label="Initial Investment"
                placeholder="Initial Investment"
            />

            <CalculatorFormField
                label="Rate"
                placeholder="Rate"
            />

            <CalculatorFormField
                label="Cashflow 1"
                placeholder="Cashflow 1"
            />

        </form>
    </div>;
};

export default CalculatorPanel;
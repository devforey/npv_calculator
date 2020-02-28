import React from 'react';
import CalculatorForm, { CalculatorFormData } from './components/calculator-form/CalculatorForm';
import CalculatorResultPanel from './components/calculator-result-panel/CalculatorResultPanel';
import useCalculator from './hooks/use-calculator';

const CalculatorPage = () => {
    const [
        calculatorFormData, 
        setCalculatorFormData,
        calculatorResult
    ] = useCalculator();

    const render = () => {
        return <div className="
            h-screen
            w-screen

            flex
            flex-row
        ">
            <CalculatorForm
                formData={calculatorFormData}
                onChange={handleCalculatorFormDataChange}
            />
            <CalculatorResultPanel
                result={calculatorResult}
            />
        </div>;    
    };

    const handleCalculatorFormDataChange = (calculatorFormData: CalculatorFormData) => {
        setCalculatorFormData(calculatorFormData);
    };
    
    return render();
};

export default CalculatorPage;
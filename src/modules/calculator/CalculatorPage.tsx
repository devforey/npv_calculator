import React from 'react';
import CalculatorPanel, { CalculatorFormData } from './components/calculator-panel/CalculatorPanel';
import CalculatorResultPanel from './components/calculator-result-panel/CalculatorResultPanel';
import useCalculator from './hooks/use-calculator';

const CalculatorPage = () => {
    const [
        calculatorFormData, 
        setCalculatorFormData,
        calculatorResult
    ] = useCalculator({} as CalculatorFormData);

    const render = () => {
        return <div className="
            h-screen
            w-screen

            flex
            flex-row
        ">
            <CalculatorPanel
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
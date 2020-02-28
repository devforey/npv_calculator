import React from 'react';
import CalculatorForm, { CalculatorFormData } from './components/calculator-form/CalculatorForm';
import CalculatorResultPanel from './components/calculator-result-panel/CalculatorResultPanel';
import useCalculator from './hooks/use-calculator';

/**
 * Didn't bother adding NPV or NetPresentValue prefix to all the classes/components names
 * since only NPV is calculated but that would be a good improvement.
 */
const CalculatorPage = () => {
    const [
        calculatorFormData, 
        setCalculatorFormData,
        calculatorResult
    ] = useCalculator({
        cashFlows: [0, 0, 0, 0, 0]
    } as CalculatorFormData);

    const render = () => {
        return <div className="
            h-screen
            w-screen

            flex
            flex-row
        ">
            <CalculatorResultPanel
                result={calculatorResult}
            />
            <CalculatorForm
                formData={calculatorFormData}
                onChange={handleCalculatorFormDataChange}
            />
        </div>;
    };

    const handleCalculatorFormDataChange = (calculatorFormData: CalculatorFormData) => {
        setCalculatorFormData(calculatorFormData);
    };
    
    return render();
};

export default CalculatorPage;
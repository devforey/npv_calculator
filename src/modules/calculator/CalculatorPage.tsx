import React, { useState, useEffect } from 'react';
import CalculatorPanel, { CalculatorFormData } from './components/calculator-panel/CalculatorPanel';
import CalculatorResultPanel from './components/calculator-result-panel/CalculatorResultPanel';
import CalculatorService from './services/calculator-service';
import CalculatorMapper from './services/calculator-mapper';

const CalculatorPage = () => {
    const [calculatorFormData, setCalculatorFormData] = useState<CalculatorFormData>({});
    const [calculatorResult, setCalculatorResult] = useState<number | undefined>(0);

    const calculatorService = CalculatorService();
    const calculatorMapper = CalculatorMapper();
    
    useEffect(() => {
        const calculatorInputModel = calculatorMapper.mapFormData(calculatorFormData);
        const netPresentValue = calculatorService.calculate(calculatorInputModel);
        setCalculatorResult(netPresentValue);
    }, [calculatorFormData, calculatorMapper, calculatorService]);

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
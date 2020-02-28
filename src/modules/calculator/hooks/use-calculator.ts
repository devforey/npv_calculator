import { useState, useEffect, Dispatch } from 'react';
import { CalculatorFormData } from '../components/calculator-form/CalculatorForm';
import CalculatorService from '../services/calculator-service';
import CalculatorMapper from '../services/calculator-mapper';

const useCalculator = (initialCalculatorFormData: CalculatorFormData = { cashFlows: [0] })
    : [CalculatorFormData, Dispatch<CalculatorFormData>, number] => {

    const [calculatorFormData, setCalculatorFormData] 
        = useState<CalculatorFormData>(initialCalculatorFormData);
    const [calculatorResult, setCalculatorResult] = useState<number | undefined>(0);

    const calculatorService = CalculatorService();
    const calculatorMapper = CalculatorMapper();
    
    useEffect(() => {
        const calculatorInputModel = calculatorMapper.mapFormData(calculatorFormData);
        const netPresentValue = calculatorService.calculate(calculatorInputModel);
        setCalculatorResult(netPresentValue);
    }, [calculatorFormData, calculatorMapper, calculatorService]);

    return [
        calculatorFormData, 
        setCalculatorFormData,
        calculatorResult,
    ] as [CalculatorFormData, Dispatch<CalculatorFormData>, number];
};

export default useCalculator;
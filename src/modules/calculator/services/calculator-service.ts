import CalculatorInputModel from './calculator-input-model';

const CalculatorService = () => {

    const calculate = (input: CalculatorInputModel): number => {
        const rate = input.rate * 0.01;
        const cashFlowTotal = input.cashFlows.reduce((total, cashFlow, index) => {
            total += cashFlow / Math.pow(1 + rate, index + 1);
            return total;
        }, 0);
        const rawResult = cashFlowTotal - input.initialInvestment;
        const result = +rawResult.toFixed(2);
        return result;
    };

    return { calculate };

}

export default CalculatorService;
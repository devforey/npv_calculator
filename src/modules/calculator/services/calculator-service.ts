import CalculatorInputModel from './calculator-input-model';

const CalculatorService = () => {

    const calculate = (input: CalculatorInputModel): number => {
        const rate = input.rate * 0.01;
        const cashFlow1 = input.cashFlow1 / Math.pow((1 + rate), 1);
        const cashFlow2 = input.cashFlow2 / Math.pow((1 + rate), 2);
        const cashFlow3 = input.cashFlow3 / Math.pow((1 + rate), 3);
        const rawResult = cashFlow1 + cashFlow2 + cashFlow3 - input.initialInvestment;
        const result = +rawResult.toFixed(2);
        return result;
    };

    return { calculate };

}

export default CalculatorService;
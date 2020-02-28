import { CalculatorFormData } from '../components/calculator-panel/CalculatorPanel';
import CalculatorInputModel from './calculator-input-model';

const CalculatorMapper = () => {

    const mapFormData = (formData: CalculatorFormData): CalculatorInputModel => {
        return {
            initialInvestment: formData.initialInvestment || 0,
            rate: formData.rate || 0,
            cashFlow1: formData.cashFlow1 || 0,
            cashFlow2: formData.cashFlow2 || 0,
            cashFlow3: formData.cashFlow3 || 0,
        } as CalculatorInputModel;
    };

    return { mapFormData };

};

export default CalculatorMapper;
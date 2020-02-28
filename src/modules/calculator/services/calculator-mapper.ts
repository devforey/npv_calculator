import { CalculatorFormData } from '../components/calculator-form/CalculatorForm';
import CalculatorInputModel from './calculator-input-model';

const CalculatorMapper = () => {

    const mapFormData = (formData: CalculatorFormData): CalculatorInputModel => {
        return {
            initialInvestment: formData.initialInvestment || 0,
            rate: formData.rate || 0,
            cashFlows: formData.cashFlows
        } as CalculatorInputModel;
    };

    return { mapFormData };

};

export default CalculatorMapper;
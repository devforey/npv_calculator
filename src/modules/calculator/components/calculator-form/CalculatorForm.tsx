import React from 'react';
import { useFormik, FormikConfig, FieldArray, FieldArrayRenderProps, Formik, FormikProvider } from 'formik';
import CalculatorFormField from '../calculator-form-field/CalculatorFormField';

interface CalculatorFormProps {
    formData: CalculatorFormData,
    onChange: OnCalculatorFormChange
}

export interface CalculatorFormData {
    initialInvestment?: number,
    rate?: number,
    cashFlows: number[]
}

export type OnCalculatorFormChange = (calculatorFormData: CalculatorFormData) => void;

const CalculatorForm = ({ formData, onChange }: CalculatorFormProps) => {
    const formik = useFormik({
        initialValues: formData,
        /**
         * `CalculatorForm` needs to provide an `onChange` callback function
         * but `formik.onChange` is missing on Formik's API
         * For a workaround, `formik.validate` is used instead
         */
        validate: (values: CalculatorFormData) => handleValidate(values),
    } as FormikConfig<CalculatorFormData>);
    
    const handleValidate = (values: CalculatorFormData) => {
        onChange(values);
        return undefined;
    };
    
    const render = () => {
        return <FormikProvider
            value={formik}
        >
            <div className="
                overflow-auto

                bg-gray-300
                w-full
                h-full

                flex
                flex-col
                items-center
                justify-start

                py-5
            ">
                {renderForm()}
            </div>
        </FormikProvider>
    };

    const renderForm = () => {
        return <form 
            className="
                bg-white
                shadow-md
                rounded
                p-5
                w-6/12
            "
            action="">
            
            <CalculatorFormField
                name="initialInvestment"
                label="Initial Investment"
                placeholder="Initial Investment"
                value={formik.values.initialInvestment}
                onChange={formik.handleChange}
            />

            <CalculatorFormField
                name="rate"
                label="Rate"
                placeholder="Rate"
                value={formik.values.rate}
                onChange={formik.handleChange}
            />

            <FieldArray
                name="cashFlows"
                render={handleCashFlowsRender}
            />

        </form>
    };
    
    const handleCashFlowsRender = (arrayHelper: FieldArrayRenderProps) => {
        const cashFlowFields: JSX.Element[] = formik.values.cashFlows.map(
            mapCashFlowFields(arrayHelper)
        );

        return <div className="flex-column">
            {cashFlowFields}
            <button
                className="
                    bg-blue-500
                    hover:bg-blue-700
                    text-white
                    font-bold
                    py-2
                    px-4
                    rounded
                "
                onClick={(event) => { 
                    event.preventDefault();
                    arrayHelper.push(0);
                 }}
            >
                Add Cash Flow
            </button>
        </div>;
    };

    const mapCashFlowFields = (arrayHelper: FieldArrayRenderProps) => {
        return (_: number, index: number) => {
            return <div className="flex flex-row items-end">
                <CalculatorFormField
                    containerClassName="flex-1"
                    key={index}
                    name={`cashFlows.${index}`}
                    label={`Cashflow ${index + 1}`}
                    placeholder={`Cashflow ${index + 1}`}
                    value={formik.values.cashFlows[index]}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        formik.setFieldValue(`cashFlows.${index}`, event.target.value);
                    }}
                />
    
                {index > 0 
                    ? <button className="
                            bg-transparent
                            text-red-600
                            font-semibold
                            py-1.5
                            px-4
                            rounded
                            mb-6
                        "
                        onClick={(event) => {
                            event.preventDefault();
                            arrayHelper.remove(index);
                        }}
                        >
                        Delete
                    </button> 
                    : ''
                }
            </div>
        }
    }

    return render();
};

export default CalculatorForm;
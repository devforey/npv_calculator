import React from 'react';
import { useFormik, FormikConfig, FieldArray, FieldArrayRenderProps, Formik } from 'formik';
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
        return <Formik
            initialValues={formData}
            /**
             * `CalculatorForm` needs to provide an `onChange` callback function
             * but `formik.onChange` is missing on Formik's API
             * For a workaround, `formik.validate` is used instead
             */
            validate={(values: CalculatorFormData) => handleValidate(values)}
            onSubmit={() => {}}
        >
            <div className="
                overflow-auto

                bg-gray-300
                w-full
                h-full

                flex
                flex-col
                items-center
                justify-center
            ">
                <form 
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
                        name="cashFlows[]"
                        render={handleCashFlowsRender}
                    />

                </form>
            </div>
        </Formik>
    };
    
    const handleCashFlowsRender = () => {
        const cashFlowInputs: JSX.Element[] = formik.values.cashFlows.map((_: number, index: number) => {
            return <CalculatorFormField
                key={index}
                name={`cashFlows.${index}`}
                label={`Cashflow ${index + 1}`}
                placeholder={`Cashflow ${index + 1}`}
                value={formik.values.cashFlows[index]}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    formik.setFieldValue(`cashFlows.${index}`, event.target.value);
                }}
            />
        });

        return <div>{cashFlowInputs}</div>;
    };

    return render();

};

export default CalculatorForm;
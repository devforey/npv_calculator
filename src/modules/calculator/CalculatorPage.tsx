import React from 'react';
import CalculatorPanel from './components/calculator-panel/CalculatorPanel';
import CalculatorResultPanel from './components/calculator-result-panel/CalculatorResultPanel';

const CalculatorPage = () => {
    return <div className="
        h-screen 
        w-screen

        flex
        flex-row
    ">
        <CalculatorPanel />
        <CalculatorResultPanel />
    </div>;
};

export default CalculatorPage;
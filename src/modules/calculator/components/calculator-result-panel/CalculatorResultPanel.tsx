import React from 'react';

interface CalculatorResultPanelProps {
    result?: number
}

const CalculatorResultPanel = ({ result }: CalculatorResultPanelProps) => {
    return <div className="
        overflow-auto

        bg-gray-800
        w-full
        h-full

        flex
        flex-col
        items-center
        justify-center
    ">
        <h4 className="
            text-gray-300
            text-sm
            block
        ">
            Net Present Value
        </h4>
        <h1 className="text-gray-200
            text-4xl
            block
            font-mono
        ">
            { result === undefined ? '--' : result }
        </h1>
    </div>;
};

export default CalculatorResultPanel;
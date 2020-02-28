import React from 'react';
import classNames from 'classnames';

const Input = ({ className, ...props }: React.InputHTMLAttributes<HTMLElement>) => {
    const inputClassNames = classNames(
        'shadow',
        'appearance-none',
        'border',
        'rounded',
        'w-full',
        'py-2',
        'px-3',
        'text-gray-700',
        'leading-tight',
        'focus:outline-none',
        'focus:shadow-outline',
        className
    );
    
    return <input className={inputClassNames} {...props}/>
};

export default Input;
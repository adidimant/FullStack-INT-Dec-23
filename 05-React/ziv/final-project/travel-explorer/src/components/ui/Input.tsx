import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: React.ReactNode;
}

export const Input = React.memo(({ 
  label, 
  icon, 
  className = '', 
  ...props 
}: InputProps) => {
  return (
    <div>
      <label 
        htmlFor={props.id} 
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
      </label>
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            {icon}
          </div>
        )}
        <input
          {...props}
          className={`
            block w-full rounded-md border border-gray-300 
            ${icon ? 'pl-10' : 'pl-3'} pr-3 py-2
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
            disabled:bg-gray-50 disabled:text-gray-500
            ${className}
          `}
        />
      </div>
    </div>
  );
});

Input.displayName = 'Input';
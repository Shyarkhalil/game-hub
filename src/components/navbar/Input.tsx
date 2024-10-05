import React, { forwardRef } from 'react';
interface InputProps {
  className?: string;
  id?: string;
  type?: string;
  placeholder?: string;
  labelClassName?: string;
  labelText?: string;
  value?: string; // Controlled value
  defaultValue?: string; // Uncontrolled value
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      id,
      type = 'text',
      placeholder,
      labelClassName,
      labelText,
      value, // For controlled inputs
      defaultValue, // Added defaultValue for uncontrolled inputs
      onChange,
    },
    ref
  ) => {
    return (
      <div>
        {labelText && (
          <label htmlFor={id} className={labelClassName}>
            {labelText}
          </label>
        )}
        <input
          ref={ref} //Forward the ref from the parent to the input element
          type={type}
          className={className}
          id={id}
          placeholder={placeholder}
          {...(value !== undefined ? { value } : { defaultValue })} // Conditional logic to prevent both value and defaultValue
          onChange={onChange}
        />
      </div>
    );
  }
);

export default Input;

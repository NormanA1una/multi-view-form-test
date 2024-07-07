import { forwardRef, useEffect, useRef, useState } from "react";
import "./style.css";

type InputTextProps = {
  htmlFor: string;
  label: string;
  id: string;
  required?: boolean;
  minLength?: number;
  value?: string;
  labelClassName?: string;
  inputClassName?: string;
  enableTab?: boolean;
  setIsValid: React.Dispatch<React.SetStateAction<boolean>>;
};

export const InputText = forwardRef<HTMLInputElement, InputTextProps>(
  (
    {
      htmlFor,
      id,
      label,
      required,
      minLength,
      value,
      inputClassName,
      labelClassName,
      setIsValid,
      enableTab,
      ...props
    },
    ref
  ) => {
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setIsValid(e.target.value.length > (minLength as number));
    };

    return (
      <div className="spacing-label-input">
        <label
          htmlFor={htmlFor}
          className={
            labelClassName
              ? `${labelClassName} label-text-style`
              : "label-text-style"
          }
        >
          {label}
        </label>
        <input
          {...props}
          id={id}
          ref={ref}
          type="text"
          value={value}
          tabIndex={enableTab ? 2 : -1}
          className={
            inputClassName
              ? `${inputClassName} input-text-style`
              : "input-text-style"
          }
          required={required}
          minLength={minLength}
          onChange={handleOnChange}
        />
      </div>
    );
  }
);

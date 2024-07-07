import { forwardRef } from "react";
import "./style.css";

type InputEmailProps = {
  htmlFor: string;
  label: string;
  id: string;
  required?: boolean;
  value?: string;
  labelClassName?: string;
  inputClassName?: string;
  enableTab?: boolean;
  setIsValid: React.Dispatch<React.SetStateAction<boolean>>;
};

export const InputEmail = forwardRef<HTMLInputElement, InputEmailProps>(
  (
    {
      htmlFor,
      id,
      label,
      required,
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
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      setIsValid(emailRegex.test(e.target.value));
    };

    return (
      <div className="spacing-label-email">
        <label
          htmlFor={htmlFor}
          className={
            labelClassName
              ? `${labelClassName} label-email-style`
              : "label-email-style"
          }
        >
          {label}
        </label>
        <input
          {...props}
          tabIndex={enableTab ? 2 : -1}
          id={id}
          type="email"
          ref={ref}
          value={value}
          className={
            inputClassName
              ? `${inputClassName} input-email-style`
              : "input-email-style"
          }
          required={required}
          onChange={handleOnChange}
        />
      </div>
    );
  }
);

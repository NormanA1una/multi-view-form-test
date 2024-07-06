import { useEffect } from "react";
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
  setInputState: React.Dispatch<React.SetStateAction<string>>;
  setIsValid: React.Dispatch<React.SetStateAction<boolean>>;
};

export const InputText = ({
  htmlFor,
  id,
  label,
  required,
  minLength,
  value,
  inputClassName,
  labelClassName,
  setIsValid,
  setInputState,
}: InputTextProps) => {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputState(e.target.value);
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
        id={id}
        type="text"
        value={value}
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
};

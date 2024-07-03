import { useEffect } from "react";
import "./style.css";

type InputTextProps = {
  htmlFor: string;
  label: string;
  id: string;
  required?: boolean;
  minLength?: number;
  value?: string;
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
  setIsValid,
  setInputState,
}: InputTextProps) => {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputState(e.target.value);
    setIsValid(e.target.value.length > (minLength as number));
  };

  return (
    <div className="spacing-label-input">
      <label htmlFor={htmlFor}>{label}</label>
      <input
        id={id}
        type="text"
        value={value}
        required={required}
        minLength={minLength}
        onChange={handleOnChange}
      />
    </div>
  );
};

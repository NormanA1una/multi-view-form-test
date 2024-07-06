import "./style.css";

type InputEmailProps = {
  htmlFor: string;
  label: string;
  id: string;
  required?: boolean;
  value?: string;
  labelClassName?: string;
  inputClassName?: string;
  setIsValid: React.Dispatch<React.SetStateAction<boolean>>;
  setInputState: React.Dispatch<React.SetStateAction<string>>;
};

export const InputEmail = ({
  htmlFor,
  id,
  label,
  required,
  value,
  inputClassName,
  labelClassName,
  setIsValid,
  setInputState,
}: InputEmailProps) => {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    setInputState(e.target.value);
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
        id={id}
        type="email"
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
};

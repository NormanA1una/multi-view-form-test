import "./style.css";

type InputEmailProps = {
  htmlFor: string;
  label: string;
  id: string;
  required?: boolean;
  value?: string;
  setIsValid: React.Dispatch<React.SetStateAction<boolean>>;
  setInputState: React.Dispatch<React.SetStateAction<string>>;
};

export const InputEmail = ({
  htmlFor,
  id,
  label,
  required,
  value,
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
      <label htmlFor={htmlFor}>{label}</label>
      <input
        id={id}
        type="email"
        value={value}
        required={required}
        onChange={handleOnChange}
      />
    </div>
  );
};

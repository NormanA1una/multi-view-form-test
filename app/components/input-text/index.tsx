import "./style.css";

type InputTextProps = {
  htmlFor: string;
  label: string;
  id: string;
  setInputState: React.Dispatch<React.SetStateAction<string>>;
};

export const InputText = ({
  htmlFor,
  id,
  label,
  setInputState,
}: InputTextProps) => {
  return (
    <div className="spacing-label-input">
      <label htmlFor={htmlFor}>{label}</label>
      <input
        id={id}
        type="text"
        onChange={(e) => setInputState(e.target.value)}
      />
    </div>
  );
};

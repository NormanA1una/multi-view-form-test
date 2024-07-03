import "./style.css";

type InputCheckboxProps = {
  htmlFor: string;
  label: string;
  id: string;
  setInputState: React.Dispatch<React.SetStateAction<boolean>>;
};

export const InputCheckbox = ({
  htmlFor,
  id,
  label,
  setInputState,
}: InputCheckboxProps) => {
  return (
    <div className="spacing-label-checkbox">
      <input
        id={id}
        type="checkbox"
        onChange={(e) => setInputState(e.target.checked)}
      />
      <label htmlFor={htmlFor}>{label}</label>
    </div>
  );
};

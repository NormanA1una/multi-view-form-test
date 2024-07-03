import "./style.css";

type OptionsValues = {
  value: string | number;
  content: string;
};

type InputSelectProps = {
  htmlFor: string;
  label: string;
  id: string;
  options: OptionsValues[];
  setInputState: React.Dispatch<React.SetStateAction<string>>;
};

export const InputSelect = ({
  htmlFor,
  id,
  label,
  options,
  setInputState,
}: InputSelectProps) => {
  return (
    <div className="spacing-label-select">
      <label htmlFor={htmlFor}>{label}</label>
      <select id={id} onChange={(e) => setInputState(e.target.value)}>
        {options.map((option, i) => {
          return (
            <option
              key={i}
              value={option.value}
              disabled={option.value === "noselected" ? true : false}
            >
              {option.content}
            </option>
          );
        })}
      </select>
    </div>
  );
};

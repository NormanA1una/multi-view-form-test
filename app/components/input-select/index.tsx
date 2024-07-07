import "./style.css";
import { forwardRef } from "react";

type OptionsValues = {
  value: string | number;
  content: string;
};

type InputSelectProps = {
  htmlFor: string;
  label: string;
  id: string;
  options: OptionsValues[];
  value: string;
  enableTab: boolean;
  setInputState: React.Dispatch<React.SetStateAction<string>>;
};

export const InputSelect = forwardRef<HTMLSelectElement, InputSelectProps>(
  (
    { htmlFor, id, label, options, value, setInputState, enableTab, ...props },
    ref
  ) => {
    return (
      <div className="spacing-label-select">
        <label htmlFor={htmlFor}>{label}</label>
        <select
          {...props}
          id={id}
          ref={ref}
          onChange={(e) => setInputState(e.target.value)}
          value={value}
          tabIndex={enableTab ? 2 : -1}
        >
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
  }
);

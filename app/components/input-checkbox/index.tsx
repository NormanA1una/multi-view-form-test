import { forwardRef } from "react";
import "./style.css";

type InputCheckboxProps = {
  htmlFor: string;
  label: string;
  id: string;
  enableTab: boolean;
};

export const InputCheckbox = forwardRef<HTMLInputElement, InputCheckboxProps>(
  ({ htmlFor, id, label, enableTab, ...props }, ref) => {
    return (
      <div className="spacing-label-checkbox">
        <input
          {...props}
          tabIndex={enableTab ? 2 : -1}
          id={id}
          ref={ref}
          type="checkbox"
        />
        <label htmlFor={htmlFor}>{label}</label>
      </div>
    );
  }
);

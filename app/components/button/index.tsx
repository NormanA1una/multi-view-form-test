import "./style.css";

type ButtonProps = {
  variant: "primary" | "seondary" | "danger" | "info";
  content: string;
  isDisabled?: boolean;
  type?: "submit" | "reset" | "button";
  tabIndex?: number | undefined;
  onClickEvent?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

export const Button = ({
  content,
  variant,
  isDisabled,
  type,
  tabIndex,
  onClickEvent,
}: ButtonProps) => {
  if (variant === "primary")
    return (
      <button
        tabIndex={tabIndex}
        className={`${isDisabled ? "primary-style-disabled" : "primary-style"}`}
        onClick={onClickEvent}
        disabled={isDisabled}
        type={type}
      >
        {content}
      </button>
    );
  return (
    <button onClick={onClickEvent} disabled={isDisabled}>
      {content}
    </button>
  );
};

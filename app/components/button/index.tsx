import "./style.css";

type ButtonProps = {
  variant: "primary" | "seondary" | "danger" | "info";
  content: string;
  isDisabled?: boolean;
  type?: "submit" | "reset" | "button";
  onClickEvent?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

export const Button = ({
  content,
  variant,
  isDisabled,
  type,
  onClickEvent,
}: ButtonProps) => {
  if (variant === "primary")
    return (
      <button
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

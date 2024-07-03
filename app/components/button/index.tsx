import "./style.css";

type ButtonProps = {
  variant: "primary" | "seondary" | "danger" | "info";
  content: string;
  isDisabled?: boolean;
  onClickEvent?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

export const Button = ({
  content,
  variant,
  isDisabled,
  onClickEvent,
}: ButtonProps) => {
  if (variant === "primary")
    return (
      <button
        className={`${isDisabled ? "primary-style-disabled" : "primary-style"}`}
        onClick={onClickEvent}
        disabled={isDisabled}
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

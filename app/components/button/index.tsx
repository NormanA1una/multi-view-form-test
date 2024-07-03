import "./style.css";

type ButtonProps = {
  variant: "primary" | "seondary" | "danger" | "info";
  content: string;
  onClickEvent?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

export const Button = ({ content, variant, onClickEvent }: ButtonProps) => {
  if (variant === "primary")
    return (
      <button className="primary-style" onClick={onClickEvent}>
        {content}
      </button>
    );
  return <button onClick={onClickEvent}>{content}</button>;
};

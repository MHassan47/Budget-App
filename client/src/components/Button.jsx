import classes from "./Styles/Button.module.scss";

export default function Button({
  type,
  onClick,
  text,
  disabled,
  propClassName,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${classes[propClassName]} `}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

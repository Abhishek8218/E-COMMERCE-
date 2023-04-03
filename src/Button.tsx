import { FC, ReactNode, ButtonHTMLAttributes } from "react";

type ButtonProps = {
  children: ReactNode;
  theme?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ children, theme, size }) => {
  let themeClasses = "bg-primary-default text-white";

  if (theme == "secondary") {
    themeClasses = "bg-orange-500 text-white";
  }

  let sizeClass = "";
  switch (size) {
    case "small":
      sizeClass = "text-sm";
      break;
    case "medium":
      sizeClass = "text-xl";
      break;
    case "large":
      sizeClass = "text-3xl";
  }

  return (
    <button
      className={`max-w-xs px-8 py-2  font-bold  rounded-md    ${themeClasses} ${sizeClass}`}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  theme: "primary",
  size: "small",
};
export default Button;
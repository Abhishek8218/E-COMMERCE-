import { ChangeEvent,HTMLInputTypeAttribute, FC, FocusEventHandler,ChangeEventHandler,ReactNode } from "react";

type InputProps = {
  name?: string;
  label?: string;
  id?: string;
  touched?: { email: boolean; password: boolean };
  handleSubmit?: HTMLFormElement;
  values?: string;
  errors?: ReactNode;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  handleBlur?: { email: string; password: string };
  isLoggedIn?: boolean;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  type?: "text" | "password" | "email" | "number" | "search" | "tel" | "url" | "date" | "time" | "datetime-local";

  required?: boolean;
  autoComplete?: string;
  placeholder?: string;
  size?: "small" | "medium" | "large";
  border?: "primary" | "secondary" | "tertiary";
  className?:string;
  
} 

const Input = ({
  name,
  border,
  label,
  id,
  touched,
  size,
className,
  errors,
  ...rest
}: InputProps) => {
  let borderClass = "";
  switch (border) {
    case "primary":
      borderClass = "border-2 border-gray-500";
      break;
    case "secondary":
      borderClass = "border-indigo-600 border-2";
      break;
    case "tertiary":
      borderClass = "border-primary-dark border-2";
      break;
  }

  if (touched && errors) {
    borderClass = "border-2 border-primary-default ";
  }

  let sizeMap = '';
  switch (size) {
    case "small":
      sizeMap = "w-md";
      break;
    case "medium":
      sizeMap = "w-lg";
      break;
    case "large":
      sizeMap = "w-full";
      break;
      default:
    sizeMap = "w-md";    
  }

  return (
    <div>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <input
        id={id}
        name={name}
        className={`relative block pl-3  h-12 text-gray-800  bg-white border  appearance-none  focus-outline ${sizeMap ?? ''} ${borderClass} ${className}`}
        {...rest}
      />
      {touched && errors && (
        <div className="text-primary-default">{errors}</div>
      )}
    </div>
  );
};

export default Input;
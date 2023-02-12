import React from "react";

interface InputProps {
  type: React.HTMLInputTypeAttribute | undefined;
  inputName: string;
  title: string;
  id?: string;
  value: string;
  placeholder?: string;
  onChange: (e) => void;
  required?: boolean;
  labelClassName?: string;
  inputClassName?: string;
  containerClassName?: string;
}

const Input = (props: InputProps) => {
  return (
    <div className={props.containerClassName}>
      <label htmlFor={props.inputName} className={props.labelClassName}>
        {props.title}
      </label>
      <input
        type={props.type}
        name={props.inputName}
        id={props.id}
        className={props.inputClassName}
        value={props.value}
        onChange={(e) => props.onChange(e)}
        required={props.required}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default Input;

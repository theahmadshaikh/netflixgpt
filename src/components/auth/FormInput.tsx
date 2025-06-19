import React from "react";

interface FormInputProps {
  type: string;
  placeholder: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  required?: boolean;
}

const FormInput: React.FC<FormInputProps> = ({
  type,
  placeholder,
  value,
  onChange,
  name,
  required = true,
}) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className="mb-4 p-3 rounded bg-gray-800/70 text-white placeholder-gray-400"
    />
  );
};

export default FormInput;

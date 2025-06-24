import React from "react";

interface FormInputProps {
  type: string;
  placeholder: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  required?: boolean;
  error?: string;
}

const FormInput: React.FC<FormInputProps> = ({
  type,
  placeholder,
  value,
  onChange,
  name,
  required = true,
  error,
}) => {
  return (
  <div className="flex flex-col">
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className="mb-1 p-3 rounded bg-gray-800/70 text-white placeholder-gray-400"
    />
    {error && (
      <span className="text-red-500 text-sm">
        {error}
      </span>
    )}
  </div>
);
};

export default FormInput;

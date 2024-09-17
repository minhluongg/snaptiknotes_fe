import React from "react";
import { useController } from "react-hook-form";

const InputForm = (props) => {
  const {
    control,
    name,
    type = "text",
    placeholder = "",
    children,
    value,
    ...rest
  } = props;
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <input
      id={name}
      type={type}
      placeholder={placeholder}
      className="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-full h-11 md:h-12 md:p-4 ps-8 md:ps-10 bg-gray-50 focus:ring-green-500 focus:border-green-500"
      {...rest}
      {...field}
    />
  );
};

export default InputForm;

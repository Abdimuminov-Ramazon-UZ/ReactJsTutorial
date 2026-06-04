import { useState } from "react";
export const useInputValidate = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  const validateInput = () => {
    return value.search(/\d/) >= 0;
  };
  const validateColor = validateInput() ? "text-danger" : null;
  return { value, onChange, validateInput, validateColor };
};
//we must begin use words with every own hooks

import { useState } from "react";

const useFormInput = (initialValue = "") => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (text: string) => {
    setValue(text);
  };

  return {
    value,
    onChange: handleChange,
  };
};

export default useFormInput;

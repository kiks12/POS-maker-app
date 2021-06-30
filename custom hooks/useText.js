/* useText dependencies */
import { useState } from "react";

/* useText function */
export const useText = (initialValue) => {
  const [values, setValues] = useState(initialValue);
  const setValueFunction = (e) => {
    setValues(
      (prev) =>
        (prev = {
          ...prev,
          [e.target.name]: e.target.value,
        })
    );
  };
  return [values, setValueFunction];
};

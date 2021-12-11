import { useState } from "react/cjs/react.development";

export const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  const resetValues = () => {
    setValues(initialValues);
  };
  return [
    values,
    (e) => {
      setValues((old) => ({
        ...old,
        [e.target.name]: e.target.value,
      }));
    },
    resetValues,
  ];
};

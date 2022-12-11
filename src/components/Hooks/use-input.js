import { useState } from "react";
const useInput = (checkValidity) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouchedValue, setIsTouchedValue] = useState(false);
  const isValueValid = checkValidity(enteredValue);
  const validityValue = !isValueValid && isTouchedValue;

  const onLooseFocus = () => {
    setIsTouchedValue(true);
  };
  const valueHandle = (event) => {
    setEnteredValue(event.target.value);
  };
  const resetInput = () => {
    setEnteredValue("");
    setIsTouchedValue(false);
  };
  return {
    onLooseFocus,
    valueHandle,
    resetInput,
    isValid: isValueValid,
    validity: validityValue,
    value: enteredValue,
  };
};
export default useInput;

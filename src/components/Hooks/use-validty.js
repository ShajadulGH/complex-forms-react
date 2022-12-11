import { useState } from "react";
const useValidity = (checkValidity) => {
  const [inputValue, setInputValue] = useState("");
  const [FocusLoose, setFocusLoose] = useState(false);

  const isValidValue = checkValidity(inputValue);
  const notValid = !isValidValue && FocusLoose;

  const inputHandle = (event) => {
    setInputValue(event.target.value);
    setFocusLoose(false);
  };
  const onLoseFocus = () => {
    setFocusLoose(true);
  };
  const reset = () => {
    setInputValue("");
    setFocusLoose(false);
  };

  return {
    inputHandle,
    onLoseFocus,
    reset,
    isValidValue,
    notValid,
    inputValue,
  };
};
export default useValidity;

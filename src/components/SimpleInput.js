import React from "react";
import useInput from "./Hooks/use-input";
const SimpleInput = (props) => {
  const {
    valueHandle: emailHandler,
    isValid: isEmailValid,
    onLooseFocus: onLooseFocusEmail,
    value: inputEmail,
    validity: validityEmail,
    resetInput: resetEmail,
  } = useInput((value) => value.includes("@"));
  const {
    valueHandle: nameHandler,
    isValid: isNameValid,
    onLooseFocus: onLooseFocusName,
    value: inputName,
    validity: validityName,
    resetInput: resetName,
  } = useInput((value) => value !== "");
  let formIsValid = false;
  if (isNameValid === true && isEmailValid === true) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();
    if (!isNameValid || !isEmailValid) {
      return;
    }
    resetName();
    resetEmail();
  };
  // Chnaging css on invalid inputs
  const formClassName = validityName ? "form-control invalid" : "form-control";
  const formClassEmail = validityEmail
    ? "form-control invalid"
    : "form-control";
  return (
    <form onSubmit={submitHandler}>
      <div className={formClassName}>
        <label htmlFor="name">Your Name</label>
        <input
          onChange={nameHandler}
          type="text"
          id="name"
          value={inputName}
          onBlur={onLooseFocusName}
        />
      </div>
      <div className={formClassEmail}>
        <label htmlFor="email">Email</label>
        <input
          onChange={emailHandler}
          type="text"
          id="name"
          value={inputEmail}
          onBlur={onLooseFocusEmail}
        />
      </div>
      {validityName || validityEmail ? (
        <p className="error-text">The input is invalid!</p>
      ) : (
        ""
      )}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};
export default SimpleInput;

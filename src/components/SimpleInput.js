import React, { useState } from "react";
const SimpleInput = (props) => {
  const [enteredName, setInput] = useState("");
  const [isTouchedName, setIsTouchedName] = useState(false);

  const [enteredEmail, setEnteredEmail] = useState("");
  const [isTouchedEmail, setIsTouchedEmail] = useState(false);

  const isInputValid = enteredName !== "";
  const isEmailValid = enteredEmail.includes("@");

  const validityName = !isInputValid && isTouchedName;
  const validityEmail = !isEmailValid && isTouchedEmail;

  let formIsValid = false;
  if (isInputValid === true && isEmailValid === true) {
    formIsValid = true;
  }
  // onblur input field
  const onLooseFocusName = () => {
    setIsTouchedName(true);
  };
  const onLooseFocusEmail = () => {
    setIsTouchedEmail(true);
  };

  // Handling inputs onchange
  const inputHandle = (event) => {
    setInput(event.target.value);
  };
  const emailHandle = (event) => {
    setEnteredEmail(event.target.value);
  };
  // Handle the submit
  const submitHandler = (event) => {
    event.preventDefault();
    setIsTouchedName(true);
    setIsTouchedEmail(true);
    if (!isInputValid || !isEmailValid) {
      return;
    }
    console.log(enteredName);
    console.log(enteredEmail);
    setInput("");
    setEnteredEmail("");
    setIsTouchedName(false);
    setIsTouchedEmail(false);
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
          onChange={inputHandle}
          type="text"
          id="name"
          value={enteredName}
          onBlur={onLooseFocusName}
        />
      </div>
      <div className={formClassEmail}>
        <label htmlFor="email">Email</label>
        <input
          onChange={emailHandle}
          type="text"
          id="name"
          value={enteredEmail}
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

import React, { useState, useRef } from "react";
const SimpleInput = (props) => {
  const gettingInput = useRef();
  const [enteredInput, setInput] = useState("");
  const [isValid, setIsValid] = useState(true);
  const inputHandle = (event) => {
    setInput(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (enteredInput.trim() === "") {
      setIsValid(false);
      return;
    }
    setIsValid(true);
    console.log(enteredInput);
    const gotInput = gettingInput.current.value;
    console.log(gotInput);
    setInput("");
  };
  const formClass = isValid ? "form-control" : "form-control invalid";
  return (
    <form onSubmit={submitHandler}>
      <div className={formClass}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={gettingInput}
          onChange={inputHandle}
          type="text"
          id="name"
          value={enteredInput}
        />
      </div>
      {!isValid && <p className="error-text">The input is invalid!</p>}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

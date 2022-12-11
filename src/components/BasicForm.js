import useValidity from "./Hooks/use-validty";
const BasicForm = (props) => {
  // Using custom Hook for First Name
  const {
    inputValue: nameInputValue,
    inputHandle: nameInputHandle,
    onLoseFocus: nameOnLoseFocus,
    reset: nameReset,
    isValidValue: nameIsValidValue,
    notValid: nameNotValid,
  } = useValidity((value) => value.trim() !== "");
  // Using custom Hook for Last Name
  const {
    inputValue: lastNameInputValue,
    inputHandle: lastNameInputHandle,
    onLoseFocus: lastNameOnLoseFocus,
    reset: lastNameReset,
    isValidValue: lastNameIsValidValue,
    notValid: lastNameNotValid,
  } = useValidity((value) => value.trim() !== "");
  // Using custom Hook for Email
  const {
    inputValue: EmailInputValue,
    inputHandle: EmailInputHandle,
    onLoseFocus: EmailOnLoseFocus,
    reset: EmailReset,
    isValidValue: EmailIsValidValue,
    notValid: EmailNotValid,
  } = useValidity((value) => value.includes("@"));
  // form Validity check
  let formIsValid = false;
  if (nameIsValidValue && lastNameIsValidValue && EmailIsValidValue) {
    formIsValid = true;
  }
  // After submit form
  const submitHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }
    console.log("Summitted!!!");
    console.log(nameInputValue);
    console.log(lastNameInputValue);
    console.log(EmailInputValue);
    nameReset();
    EmailReset();
    lastNameReset();
  };
  // Change the css class for invalid warning
  const classFName = nameNotValid ? "form-control invalid" : "form-control";
  const classLName = lastNameNotValid ? "form-control invalid" : "form-control";
  const classEmail = EmailNotValid ? "form-control invalid" : "form-control";
  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={classFName}>
          <label htmlFor="name">First Name</label>
          <input
            onBlur={nameOnLoseFocus}
            onChange={nameInputHandle}
            type="text"
            id="name"
            value={nameInputValue}
          />
        </div>
        <div className={classLName}>
          <label htmlFor="name">Last Name</label>
          <input
            value={lastNameInputValue}
            onChange={lastNameInputHandle}
            onBlur={lastNameOnLoseFocus}
            type="text"
            id="name"
          />
        </div>
      </div>
      <div className={classEmail}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          value={EmailInputValue}
          onChange={EmailInputHandle}
          onBlur={EmailOnLoseFocus}
          type="text"
          id="name"
        />
      </div>
      {(nameNotValid || lastNameNotValid || EmailNotValid) && (
        <p>Input Field is not valid!!</p>
      )}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;

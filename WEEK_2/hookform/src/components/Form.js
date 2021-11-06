import React, { useState } from "react";
const Form = (props) => {
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirm, setConfirm] = useState("");
  const [confirmError, setConfirmError] = useState("");

  const createUser = (e) => {
    e.preventDefault();
    const newUser = { firstName, lastName, email, password, confirm };
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setConfirm("");
  };

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
    if (e.target.value.length < 2) {
      setFirstNameError("Must be 2 characters or more");
    } else {
      setFirstNameError("");
    }
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
    if (e.target.value.length < 2) {
      setLastNameError("Must be 2 characters or more");
    } else {
      setLastNameError("");
    }
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    if (e.target.value.length < 5) {
      setEmailError("Must be 5 characters or more");
    } else {
      setEmailError("");
    }
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 8) {
      setPasswordError("Must be 8 characters or more");
    } else {
      setPasswordError("");
    }
  };

  const handleConfirm = (e) => {
    setConfirm(e.target.value);
    if (e.target.value === password) {
      setConfirmError("");
    } else {
      setConfirmError("passwords must match");
    }
  };
  return (
    <div>
      <form onSubmit={createUser}>
        <div>
          <label>First name</label>
          <input type="text" value={firstName} onChange={handleFirstName} />
          {firstNameError ? <p>{firstNameError}</p> : ""}
        </div>
        <div>
          <label>Last Name</label>
          <input type="text" value={lastName} onChange={handleLastName} />
          {lastNameError ? <p>{lastNameError}</p> : ""}
        </div>
        <div>
          <label>Email</label>
          <input type="email" value={email} onChange={handleEmail} />
          {emailError ? <p>{emailError}</p> : ""}
        </div>
        <div>
          <label>Password</label>
          <input type="password" value={password} onChange={handlePassword} />
          {passwordError ? <p>{passwordError}</p> : ""}
        </div>
        <div>
          <label>Confirm Password</label>
          <input type="password" value={confirm} onChange={handleConfirm} />
          {confirmError ? <p>{confirmError}</p> : ""}
        </div>
      </form>
      <hr></hr>
      <p> First Name:{firstName}</p>
      <p>Last Name: {lastName}</p>
      <p>Email: {email}</p>
      <p>Password: {password}</p>
      <p>Confirm: {confirm}</p>
    </div>
  );
};

export default Form;

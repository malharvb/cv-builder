import React, { useState } from 'react';
import '../styles/reset.css';
import '../styles/style.css';

function GeneralInfo() {
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    isSaved: 0,
  });

  const {
    firstName, lastName, email, phoneNumber, isSaved,
  } = state;

  const handleChange = (e) => {
    setState((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  function checkSaveState(e) {
    e.preventDefault();
    setState((prevState) => ({
      ...prevState,
      isSaved: 1 - isSaved,
    }));
  }

  if (!isSaved) {
    return (
      <>
        <div className="sub-heading">General Information</div>
        <form className="form-element" onSubmit={checkSaveState}>
          <div className="sub-form">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              className="input-box"
              placeholder="John"
              id="firstName"
              value={firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="sub-form">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              className="input-box"
              placeholder="Doe"
              id="lastName"
              value={lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="sub-form">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              className="input-box"
              placeholder="example@gmail.com"
              id="email"
              value={email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="sub-form">
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="number"
              className="input-box"
              placeholder="00000-00000"
              id="phoneNumber"
              value={phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="general-btn">Save</button>
        </form>
      </>
    );
  }
  return (
    <>
      <div className="sub-heading">General Information</div>
      <form className="form-element" onSubmit={checkSaveState}>
        <div className="sub-form">
          <label className="display-box-label" htmlFor="firstName">First Name:</label>
          <div className="display-box" id="firstName">{firstName}</div>
        </div>
        <div className="sub-form">
          <label className="display-box-label" htmlFor="lastName">Last Name:</label>
          <div className="display-box" id="lastName">{lastName}</div>
        </div>
        <div className="sub-form">
          <label className="display-box-label" htmlFor="email">Email:</label>
          <div className="display-box" id="email">{email}</div>
        </div>
        <div className="sub-form">
          <label className="display-box-label" htmlFor="phoneNumber">Phone Number:</label>
          <div className="display-box" id="phoneNumber">{phoneNumber}</div>
        </div>
        <button type="submit" className="general-btn">Edit</button>
      </form>
    </>
  );
}

export default GeneralInfo;

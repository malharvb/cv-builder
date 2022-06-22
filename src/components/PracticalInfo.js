import React, { useState } from 'react';
import '../styles/reset.css';
import '../styles/style.css';

function PracticalInfo() {
  const [state, setState] = useState({
    companyName: '',
    positionTitle: '',
    from: '',
    to: '',
    isSaved: 0,
    toAdd: 0,
  });

  const {
    companyName, positionTitle, from, to, isSaved, toAdd,
  } = state;

  function handleChange(e) {
    setState((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }

  function checkSaveState(e) {
    e.preventDefault();

    setState((prevState) => ({
      ...prevState,
      isSaved: 1 - isSaved,
    }));
  }

  function addForm() {
    setState((prevState) => ({
      ...prevState,
      companyName: '',
      positionTitle: '',
      from: '',
      to: '',
      toAdd: 1 - toAdd,
    }));
  }

  if (!toAdd) {
    return (
      <>
        <div className="sub-heading">Practical Experience</div>
        <form className="form-element">
          <button type="button" className="general-btn" onClick={addForm}>Add</button>
        </form>
      </>
    );
  }

  if (!isSaved) {
    return (
      <>
        <div className="sub-heading">Practical Experience</div>
        <form className="form-element" onSubmit={checkSaveState}>
          <div className="sub-form">
            <label htmlFor="companyName">Company Name:</label>
            <input
              type="text"
              className="input-box"
              placeholder="Google"
              id="companyName"
              value={companyName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="sub-form">
            <label htmlFor="positionTitle">Position Title:</label>
            <input
              type="text"
              className="input-box"
              placeholder="Junior Developer"
              id="positionTitle"
              value={positionTitle}
              onChange={handleChange}
              required
            />
          </div>
          <div className="sub-form">
            <label htmlFor="from">From:</label>
            <input
              type="date"
              className="input-box"
              id="from"
              value={from}
              onChange={handleChange}
              required
            />
          </div>
          <div className="sub-form">
            <label htmlFor="to">To:</label>
            <input
              type="date"
              className="input-box"
              id="to"
              value={to}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="general-btn">Save</button>
          <button type="button" className="general-btn" onClick={addForm}>Delete</button>
        </form>
      </>
    );
  }
  return (
    <>
      <div className="sub-heading">Practical Experience</div>
      <form className="form-element" onSubmit={checkSaveState}>
        <div className="sub-form">
          <label className="display-box-label" htmlFor="companyName">Company Name:</label>
          <div className="display-box" id="companyName">{companyName}</div>
        </div>
        <div className="sub-form">
          <label className="display-box-label" htmlFor="positionTitle">Position Title:</label>
          <div className="display-box" id="positionTitle">{positionTitle}</div>
        </div>
        <div className="sub-form">
          <label className="display-box-label" htmlFor="from">From:</label>
          <div className="display-box" id="from">{from}</div>
        </div>
        <div className="sub-form">
          <label className="display-box-label" htmlFor="to">To:</label>
          <div className="display-box" id="to">{to}</div>
        </div>
        <button type="submit" className="general-btn">Edit</button>
      </form>
    </>
  );
}

export default PracticalInfo;

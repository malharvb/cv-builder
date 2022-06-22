import React, { useState } from 'react';
import '../styles/reset.css';
import '../styles/style.css';

function EducationalInfo() {
  const [state, setState] = useState({
    schoolName: '',
    tileOfStudy: '',
    from: '',
    to: '',
    isSaved: 0,
    toAdd: 0,
  });

  const {
    schoolName, tileOfStudy, from, to, isSaved, toAdd,
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
      schoolName: '',
      tileOfStudy: '',
      from: '',
      to: '',
      toAdd: 1 - toAdd,
    }));
  }

  if (!toAdd) {
    return (
      <>
        <div className="sub-heading">Educational Information</div>
        <form className="form-element">
          <button type="button" className="general-btn" onClick={addForm}>Add</button>
        </form>
      </>
    );
  }

  if (!isSaved) {
    return (
      <>
        <div className="sub-heading">Educational Information</div>
        <form className="form-element" onSubmit={checkSaveState}>
          <div className="sub-form">
            <label htmlFor="schoolName">School Name:</label>
            <input
              type="text"
              className="input-box"
              placeholder="Harvard"
              id="schoolName"
              value={schoolName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="sub-form">
            <label htmlFor="tileOfStudy">Title of Study:</label>
            <input
              type="text"
              className="input-box"
              placeholder="B.S"
              id="tileOfStudy"
              value={tileOfStudy}
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
      <div className="sub-heading">Educational Information</div>
      <form className="form-element" onSubmit={checkSaveState}>
        <div className="sub-form">
          <label className="display-box-label" htmlFor="schoolName">School Name:</label>
          <div className="display-box" id="schoolName">{schoolName}</div>
        </div>
        <div className="sub-form">
          <label className="display-box-label" htmlFor="tileOfStudy">Title of Study:</label>
          <div className="display-box" id="tileOfStudy">{tileOfStudy}</div>
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

export default EducationalInfo;

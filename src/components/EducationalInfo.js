import React, { Component } from 'react';
import '../styles/reset.css';
import '../styles/style.css';

class EducationalInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schoolName: '',
      tileOfStudy: '',
      from: '',
      to: '',
      isSaved: 0,
      toAdd: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.checkSaveState = this.checkSaveState.bind(this);
    this.addForm = this.addForm.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  checkSaveState(e) {
    e.preventDefault();
    const { isSaved } = this.state;
    this.setState({
      isSaved: 1 - isSaved,
    });
  }

  addForm() {
    const {
      toAdd,
    } = this.state;
    this.setState({
      schoolName: '',
      tileOfStudy: '',
      from: '',
      to: '',
      toAdd: 1 - toAdd,
    });
  }

  render() {
    const {
      schoolName, tileOfStudy, from, to, isSaved, toAdd,
    } = this.state;

    if (!toAdd) {
      return (
        <>
          <div className="sub-heading">Educational Information</div>
          <form className="form-element">
            <button type="button" className="general-btn" onClick={this.addForm}>Add</button>
          </form>
        </>
      );
    }

    if (!isSaved) {
      return (
        <>
          <div className="sub-heading">Educational Information</div>
          <form className="form-element" onSubmit={this.checkSaveState}>
            <div className="sub-form">
              <label htmlFor="schoolName">School Name:</label>
              <input
                type="text"
                className="input-box"
                placeholder="Harvard"
                id="schoolName"
                value={schoolName}
                onChange={this.handleChange}
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
                onChange={this.handleChange}
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
                onChange={this.handleChange}
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
                onChange={this.handleChange}
                required
              />
            </div>
            <button type="submit" className="general-btn">Save</button>
            <button type="button" className="general-btn" onClick={this.addForm}>Delete</button>
          </form>
        </>
      );
    }
    return (
      <>
        <div className="sub-heading">Educational Information</div>
        <form className="form-element" onSubmit={this.checkSaveState}>
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
}

export default EducationalInfo;

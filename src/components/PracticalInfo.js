import React, { Component } from 'react';
import '../styles/reset.css';
import '../styles/style.css';

class PracticalInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companyName: '',
      positionTitle: '',
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
      companyName: '',
      positionTitle: '',
      from: '',
      to: '',
      toAdd: 1 - toAdd,
    });
  }

  render() {
    const {
      companyName, positionTitle, from, to, isSaved, toAdd,
    } = this.state;

    if (!toAdd) {
      return (
        <>
          <div className="sub-heading">Practical Experience</div>
          <form className="form-element">
            <button type="button" className="general-btn" onClick={this.addForm}>Add</button>
          </form>
        </>
      );
    }

    if (!isSaved) {
      return (
        <>
          <div className="sub-heading">Practical Experience</div>
          <form className="form-element" onSubmit={this.checkSaveState}>
            <div className="sub-form">
              <label htmlFor="companyName">Company Name:</label>
              <input
                type="text"
                className="input-box"
                placeholder="Google"
                id="companyName"
                value={companyName}
                onChange={this.handleChange}
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
        <div className="sub-heading">Practical Experience</div>
        <form className="form-element" onSubmit={this.checkSaveState}>
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
}

export default PracticalInfo;

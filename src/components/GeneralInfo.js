/* eslint-disable */
import React, { Component } from 'react';
import '../styles/reset.css';
import '../styles/style.css';

class GeneralInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      isSaved: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.checkSaveState = this.checkSaveState.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  checkSaveState(e) {
    e.preventDefault();
    const { isSaved } = this.state;
    this.setState({
      isSaved: 1 - isSaved,
    });
  }

  render() {
    const { firstName,lastName,email,phoneNumber,isSaved } = this.state;
    if (!isSaved) {
      return (
        <>
        <div className='sub-heading'>General Information</div>
        <form className="form-element" onSubmit={this.checkSaveState}>
          <div className="sub-form">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              className="input-box"
              placeholder="Malhar"
              id="firstName"
              value={firstName}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="sub-form">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              className="input-box"
              placeholder="Kajale"
              id="lastName"
              value={lastName}
              onChange={this.handleChange}
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
              onChange={this.handleChange}
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
              onChange={this.handleChange}
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
      <div className='sub-heading'>General Information</div>
      <form className="form-element" onSubmit={this.checkSaveState}>
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
}

export default GeneralInfo;

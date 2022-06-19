import React, { Component } from 'react';

class GeneralInfo extends Component {
  render() {
    return (
      <div className="form">
        <div className="sub-form">
          <label htmlFor="firstName">
            First Name
            {' '}
            <input type="text" placeholder="" id="firstName" />
          </label>

        </div>
      </div>
    );
  }
}

export default GeneralInfo;

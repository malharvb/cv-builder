/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import EducationalInfo from './EducationalInfo';
import PracticalInfo from './PracticalInfo';
import GeneralInfo from './GeneralInfo';

class Content extends Component {
  render() {
    return (
      <div className="main-container">
        <GeneralInfo />
        <EducationalInfo />
        <PracticalInfo />
      </div>
    );
  }
}

export default Content;

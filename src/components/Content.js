import React from 'react';
import EducationalInfo from './EducationalInfo';
import PracticalInfo from './PracticalInfo';
import GeneralInfo from './GeneralInfo';

function Content() {
  return (
    <div className="main-container">
      <GeneralInfo />
      <EducationalInfo />
      <PracticalInfo />
    </div>
  );
}

export default Content;

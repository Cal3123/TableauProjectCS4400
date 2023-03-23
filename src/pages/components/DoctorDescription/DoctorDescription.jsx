import React from 'react';

import './DoctorDescription.css';

const DoctorDescription = props => {

  const openHandler = () => {
    props.onOpenItem(props.id);
  };

  return (
    <li className="ui-card" onClick={openHandler}>
      {props.children}
    </li>
  );
};

export default DoctorDescription;
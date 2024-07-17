import React from 'react';

import "./Training.css"
import { Link } from 'react-router-dom'
function Training() {
  return (
    <div className="training">
      <h1>Interactive PSA Training</h1> 
      <div className='training_header'>
      <Link  to="/training-home">Start</Link>
      </div>
    </div>
  );
}
export default Training;

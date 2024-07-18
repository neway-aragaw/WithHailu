import React from 'react';

import "./Training.css"
import { Link } from 'react-router-dom'
function Training() {
  return (
    <div className="training">
      <h2>Interactive PSA Training</h2> 
      <div className='training_header'>
      <Link  to="/create-user">Start</Link>
      </div>
    </div>
  );
}
export default Training;

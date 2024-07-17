import React from 'react';
import { Link } from 'react-router-dom';
import './TrainingHome.css';

function TrainingHome() {
  return (
    <div className="training-home">
      <h1>Welcome to the Training </h1>
      <div className="button-group">
        <div className="button-item">
          <p>Understand the Working Environment</p>
          <Link to="/working-environment"><button>Start</button></Link>
        </div>
        <div className="button-item">
          <p>Working from the Gate</p>
          <Link to="/working-gate"><button>Start</button></Link>
        </div>
        <div className="button-item">
          <p>Working from the Lobby</p>
          <Link to="/working-lobby"><button>Start</button></Link>
        </div>
        <div className="button-item">
          <p>Understanding the Tablet</p>
          <Link to="/understanding-tablet"><button>Start</button></Link>
        </div>
        <div className="button-item">
          <p>Administrative Issues</p>
          <Link to="/administrative-issues"><button>Start</button></Link>
        </div>
      </div>
    </div>
  );
}

export default TrainingHome;

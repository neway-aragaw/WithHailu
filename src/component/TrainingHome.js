import React from 'react';
import { Link } from 'react-router-dom';
import "./TrainingHome.css"

function TrainingHome() {
  return (
    <div className="training-home">
      <h1>Welcome to the Training Home</h1>
      <div className="button-group">
        <Link to="/working-environment"><button>Understand the Working Environment</button></Link>
        <Link to="/working-gate"><button>Working from the Gate</button></Link>
        <Link to="/working-lobby"><button>Working from the Lobby</button></Link>
        <Link to="/understanding-tablet"><button>Understanding the Tablet</button></Link>
        <Link to="/administrative-issues"><button>Administrative Issues</button></Link>
      </div>
    </div>
  );
}

export default TrainingHome;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Training from './component/Training'; // Assuming Training is in 'components' folder
import TrainingHome from './component/TrainingHome';

function App() {
  return (
    
      <Routes>
        <Route exact path="/" element={<Training />} />
        <Route path="/training-home" element={<TrainingHome />} />
      </Routes>
 
  );
}

export default App;

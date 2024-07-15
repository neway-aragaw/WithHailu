import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Training from './component/Training'; // Assuming Training is in 'components' folder
import TrainingHome from './component/TrainingHome';
import WorkingEnvironment from './component/Working-environment';
import MultipleChoiceTest from './component/MultipleChoice';

function App() {
  return (
    
      <Routes>
        <Route exact path="/" element={<Training />} />
        <Route path="/training-home" element={<TrainingHome />} />
        <Route path="/working-environment" element={<WorkingEnvironment />} />
        <Route path="/multiple-choice" element={<MultipleChoiceTest />} />
      </Routes>
 
  );
}

export default App;

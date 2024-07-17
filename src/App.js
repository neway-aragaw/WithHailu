import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Training from './component/Training'; // Assuming Training is in 'components' folder
import TrainingHome from './component/TrainingHome';
import WorkingEnvironment from './component/Working-environment';
import MultipleChoiceTest from './component/MultipleChoice';
import Lobby from './component/VideoLobby';
import MultipleChoiceLobby from './component/MultipleChoiceLobby';
import Tablet from './component/VideoTablet';
import MCT from './component/MultipleChoiceTablet';
import Congratulations from './component/Congratulations';
import "./App.css"

function App() {
  return (
    
      <Routes>
        <Route exact path="/" element={<Training />} />
        <Route path="/training-home" element={<TrainingHome />} />
        <Route path="/working-environment" element={<WorkingEnvironment />} />
        <Route path="/multiple-choice" element={<MultipleChoiceTest />} />
        <Route path="/video2" element={<Lobby />} />
        <Route path="/tablet" element={<Tablet />} />
        <Route path="/M-C-L" element={<MultipleChoiceLobby />} />
        <Route path="/M-C-T" element={<MCT />} />
        <Route path="/congra" element={<Congratulations />} />
      </Routes>
 
  );
}

export default App;

import React,{useState} from 'react';
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
import CreateUser from './component/CreateUser';
import CreateUserAccount from './component/CreateUser';
import Header from './component/Header';

function App() {
  const [userName, setUserName] = useState('');
  return (
    <div >
      
      <Routes>
      <Route path="/create-user" element={<CreateUser setUserName={setUserName} />} />
      <Route path="/training-home" element={<TrainingHome userName={userName} />} />
        <Route exact path="/" element={<Training />} />
        <Route path="/working-environment" element={<WorkingEnvironment userName={userName} />} />
        <Route path="/multiple-choice" element={<MultipleChoiceTest userName={userName} />} />
        <Route path="/video2" element={<Lobby />} />
        <Route path="/create-user" element={<CreateUser />} />
        <Route path="/tablet" element={<Tablet />} />
        <Route path="/M-C-L" element={<MultipleChoiceLobby />} />
        <Route path="/M-C-T" element={<MCT />} />
        <Route path="/congra" element={<Congratulations />} />
      </Routes>
      </div>
  );
}

export default App;




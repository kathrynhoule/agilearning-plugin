import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from "./components/HomeScreen.jsx";
import JoinGameScreen from './components/JoinGameScreen.jsx';
import CreateGameScreen from './components/CreateGameScreen.jsx';
import QuizForm from './components/QuizGame/QuizForm.jsx';
import StoryForm from './components/StoryGame/StoryForm.jsx';
import QuizGame from './components/QuizGame/QuizGame.jsx';
import StoryGame from './components/StoryGame/StoryGame.jsx';
//  import CreationSuccessPage from './CreationSuccessPage';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/join-game" element={<JoinGameScreen />} />
        <Route path="/create-game" element={<CreateGameScreen />} />
        <Route path="/create-game/quiz" element={<QuizForm />} />
        <Route path="/quiz-game" element={<QuizGame />} />
        <Route path="/create-game/story" element={<StoryForm />} />
        <Route path="/story-game" element={<StoryGame />} />
      </Routes>
    </Router>
  );
};

export default App;
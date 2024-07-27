import React from 'react';
import { useHookstate } from '@hookstate/core';
import { gameTypeState } from '../state/gameTypeState';
import { useNavigate } from 'react-router-dom';
import './HomeScreen.css';

const CreateGameScreen = () => {
  const gameType = useHookstate(gameTypeState);
  const [selectedGameType, setSelectedGameType] = React.useState(gameType.get()[0].id);
  const navigate = useNavigate();

  const handleCreateGame = (gameTypeId) => {
    console.log(`Creating game of type: ${gameTypeId}`);
    // Add logic for creating a game here, using gameTypeId
  };

  return (
    <div className="create-game-screen">
      <h1>Create a Game</h1>
      <div className="game-type-options">
        {gameType.get().map(type => (
          <div key={type.id} className="game-type-card">
            <h2>{type.name}</h2>
            <p>{type.description}</p> {/* description for each game type */}
            <button onClick={() => handleCreateGame(type.id)}>Create {type.name} Game</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreateGameScreen;
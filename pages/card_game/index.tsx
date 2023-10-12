import React from 'react';
import GameBoard from '@/components/CardGame/GameBoard';
import './card_game.module.scss'; // SCSS 파일을 import

function App() {
  return (
    <div className="App">
      <GameBoard />
    </div>
  );
}

export default App;

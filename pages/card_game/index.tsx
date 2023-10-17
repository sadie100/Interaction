import React from "react";
import GameBoard from "@/components/CardGame/GameBoard";
import styles from "./card_game.module.scss"; // SCSS 파일을 import

function App() {
  return (
    <div className={styles.App}>
      <GameBoard />
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import styles from "./GameBoard.module.scss";
import Card from "@/components/CardGame/Card";

const colors: string[] = [
  "red",
  "blue",
  "green",
  "yellow",
  "purple",
  "orange",
  "pink",
  "brown",
  "gray",
  "teal",
];

const shuffleArray = (array: string[]): string[] => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const GameBoard: React.FC = () => {
  const [score, setScore] = useState<number>(0);
  const [cards, setCards] = useState<
    { id: number; color: string; flipped: boolean; matched: boolean }[]
  >([]);
  const [flippedCards, setFlippedCards] = useState<
    { id: number; color: string }[]
  >([]);
  const [canClick, setCanClick] = useState<boolean>(true);

  useEffect(() => {
    const shuffledColors = shuffleArray([...colors, ...colors]);
    const initialCards = shuffledColors.map((color, index) => ({
      id: index,
      color: color,
      flipped: false,
      matched: false,
    }));
    setCards(initialCards);
  }, []);

  const handleCardClick = (id: number, color: string) => {
    if (canClick) {
      const updatedCards = cards.map((card) =>
        card.id === id && !card.matched ? { ...card, flipped: true } : card
      );
      setCards(updatedCards);

      if (flippedCards.length < 2) {
        const newFlippedCards = [...flippedCards, { id, color }];
        setFlippedCards(newFlippedCards);

        if (newFlippedCards.length === 2) {
          // 두 개의 카드를 뒤집은 상태이므로 클릭 불가능 상태로 설정
          setCanClick(false);
          checkMatch(newFlippedCards);
        }
      }
    }
  };

  const checkMatch = (flippedCards: { id: number; color: string }[]) => {
    const [card1, card2] = flippedCards;
    setTimeout(() => {
      if (card1.color === card2.color) {
        const updatedCards = cards.map((card) =>
          card.id === card1.id || card.id === card2.id
            ? { ...card, matched: true }
            : card
        );
        setCards(updatedCards);
        setScore(score + 10);
      } else {
        const unflippedCards = cards.map((card) =>
          card.id === card1.id || card.id === card2.id
            ? { ...card, flipped: false }
            : card
        );
        setCards(unflippedCards);
      }
      setFlippedCards([]);
      setCanClick(true);
    }, 1000);
  };

  return (
    <>
      <div className="score">Score: {score}</div>
      {cards.every((card) => card.matched) && (
        <div className={styles.message}>Game Ends! Your score is: {score}</div>
      )}
      <div className={styles["game-board"]}>
        {cards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            color={card.color}
            flipped={card.flipped}
            matched={card.matched}
            onCardClick={handleCardClick}
            canClick={canClick}
          />
        ))}
      </div>
    </>
  );
};

export default GameBoard;

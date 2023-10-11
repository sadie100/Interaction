import React, { useState, useEffect } from 'react';
import styles from './GameBoard.module.scss';
import Card from '@/components/CardGame/Card';

const colors: string[] = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'brown', 'gray', 'teal'];

const shuffleArray = (array: string[]): string[] => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const GameBoard: React.FC = () => {
  const [score, setScore] = useState<number>(0);
  const [cards, setCards] = useState<{ id: number; color: string; matched: boolean }[]>([]);
  const [flippedCards, setFlippedCards] = useState<{ id: number; color: string }[]>([]);

  useEffect(() => {
    const shuffledColors = shuffleArray([...colors, ...colors]);
    const initialCards = shuffledColors.map((color, index) => ({
      id: index,
      color: color,
      matched: false,
    }));
    setCards(initialCards);
  }, []);

  const handleCardClick = (id: number, color: string) => {
    if (flippedCards.length < 2) {
      const newFlippedCards = [...flippedCards, { id, color }];
      setFlippedCards(newFlippedCards);

      if (newFlippedCards.length === 2) {
        checkMatch(newFlippedCards);
      }
    }
  };

  const checkMatch = (flippedCards: { id: number; color: string }[]) => {
    const [card1, card2] = flippedCards;
    if (card1.color === card2.color) {
      // 짝이 맞을 때의 처리
      const updatedCards = cards.map((card) =>
        card.id === card1.id || card.id === card2.id ? { ...card, matched: true } : card
      );
      setCards(updatedCards);
      setScore(score + 10);
    } else {
      // 짝이 맞지 않을 때의 처리
      setTimeout(() => {
        setFlippedCards([]);
      }, 1000);
    }
  };

  return (
    <div className={styles['game-board']}>
      {cards.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          color={card.color}
          matched={card.matched}
          onCardClick={handleCardClick}
        />
      ))}
      {cards.every((card) => card.matched) && (
        <div className={styles.message}>Game Ends! Your score is: {score}</div>
      )}
    </div>
  );
};

export default GameBoard;

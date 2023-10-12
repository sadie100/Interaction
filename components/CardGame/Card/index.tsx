import React from 'react';
import styles from './Card.module.scss';

interface CardProps {
  id: number;
  color: string;
  flipped: boolean;
  matched: boolean;
  onCardClick: (id: number, color: string) => void;
  canClick: boolean;
}

const Card: React.FC<CardProps> = ({ id, color, flipped, matched, onCardClick, canClick }) => {
  const handleCardClick = () => {
    if (!flipped && !matched) {
      onCardClick(id, color);
    }
  };

  return (
    <div
      className={`${styles.card} ${flipped ? styles.flipped : ''} ${matched ? styles.matched : ''}`}
      style={{ backgroundColor: flipped ? color : 'white' }}
      onClick={handleCardClick}
    ></div>
  );
};

export default Card;

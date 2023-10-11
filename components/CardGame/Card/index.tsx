import React from 'react';
import styles from './Card.module.scss';

interface CardProps {
  id: number;
  color: string;
  matched: boolean;
  onCardClick: (id: number, color: string) => void;
}

const Card: React.FC<CardProps> = ({ id, color, matched, onCardClick }) => {
  const handleCardClick = () => {
    if (!matched) {
      onCardClick(id, color);
    }
  };

  return (
    <div
      className={`${styles.card} ${matched ? styles.flipped : ''}`}
      style={{ backgroundColor: matched ? color : 'white' }}
      onClick={handleCardClick}
    ></div>
  );
};

export default Card;

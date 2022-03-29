import React, { MouseEvent } from 'react';
import styles from './TodoCard.module.css';
import { ITodo } from '../../types/TodoTypes';

interface ITodoCardProps extends ITodo {
  handleClick: (e: MouseEvent<HTMLDivElement>) => void;
}

export const TodoCard: React.FC<ITodoCardProps> = ({ id, title, handleClick }) => {
  return (
    <div id={String(id)} onClick={handleClick} className={styles.todo} >
      {title}
    </div>
  );
};

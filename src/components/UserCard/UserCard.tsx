import React from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from '../../types/TodoTypes';
import styles from './UserCard.module.css';

export const UserCard: React.FC<User> = ({ id, name ,email, address}) => {
  const navigate = useNavigate();
  function handleClick() {
    navigate(`/users/${id}`);
  }

  return (
    <section className={styles.userCard} onClick={handleClick}>
        <p>Nome: <br/><span>{name}</span></p>
        <p>Email: <br/><span>{email}</span></p>
        <p>Cidade: <br/><span>{address.city}</span></p>
    </section>
  );
};

import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Link to='/'>To do App</Link>
    </header>
  );
};


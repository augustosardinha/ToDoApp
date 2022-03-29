import React, { useEffect, useState } from 'react';
import styles from './Home.module.css';
import api from '../../services/api';
import { UserCard } from '../../components/UserCard';
import { User } from '../../types/TodoTypes';

export const Home: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    api.get('/users').then((res) => setUsers(res.data));
  }, []);

  return (
    <main className={styles.main}>
      {users.map((user) => (
        <UserCard
          key={user.id}
          id={user.id}
          name={user.name}
          address={user.address}
          email={user.email}
        />
      ))}
    </main>
  );
};

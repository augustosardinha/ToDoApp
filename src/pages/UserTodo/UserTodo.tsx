import React, { useEffect, useState, MouseEvent, ChangeEvent } from 'react';
import styles from './UserTodo.module.css';
import api from '../../services/api';
import { useParams } from 'react-router-dom';
import { TodoCard } from '../../components/TodoCard';
import { ITodo } from '../../types/TodoTypes';

export const UserTodo: React.FC = () => {
  const [todoInput, setTodoInput] = useState<string>('');
  const [todos, setTodos] = useState<ITodo[]>([]);
  const { id } = useParams();

  useEffect(() => {
    api.get('todos').then((res) => {
      const usersTodo = res.data.filter((todo: ITodo) => todo.userId === Number(id));
      setTodos(usersTodo);
    });
  }, [id]);

  function handleTurnTodoCompleted(e: MouseEvent<HTMLDivElement>) {
    const newTodos = todos.map((todo) => {
      return todo.id === Number(e.currentTarget.id) ? { ...todo, completed: true } : todo;
    });
    setTodos(newTodos);
  }

  function handleRemoveTodo(e: MouseEvent<HTMLDivElement>) {
    const newTodos = todos.filter((todo) => todo.id !== Number(e.currentTarget.id));
    setTodos(newTodos);
  }
  
  function handleAddNewTodo(e: MouseEvent<HTMLButtonElement>) {
    if (!todoInput) return;

    const newTodo = {
      userId: Number(id),
      id: Math.random() * 0.25,
      title: todoInput,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setTodoInput('');
  }
  
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setTodoInput(e.currentTarget.value);
  }

  return (
    <main className={styles.userTodo}>
      <article className={styles.inputTodo}>
        <input
          type="text"
          placeholder="Adicione nova tarefa"
          name="todo"
          onChange={handleChange}
          value={todoInput}
        />
        <button onClick={handleAddNewTodo}>Adicionar</button>
      </article>

      <article className={styles.todoContainer}>
        <section className={styles.todoSection}>
          <h1>Incompletas: </h1>
          <div className={styles.todoContent}>
            {todos.map((todo: ITodo) => !todo.completed && (
              <TodoCard
                key={todo.id}
                userId={todo.userId}
                id={todo.id}
                title={todo.title}
                completed={todo.completed}
                handleClick={handleTurnTodoCompleted}
              />
            ))}
          </div>
        </section>

        <section className={styles.todoSection}>
          <h1>Completas: </h1>
          <div className={styles.todoContent}>
            {todos.map((todo: ITodo) => todo.completed && (
              <TodoCard
                key={todo.id}
                userId={todo.userId}
                id={todo.id}
                title={todo.title}
                completed={todo.completed}
                handleClick={handleRemoveTodo}
              />
            ))}
          </div>
        </section>
      </article>
    </main>
  );
};

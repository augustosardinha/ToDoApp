import React from 'react';
import { Header } from './components/Header';
import { Home } from './pages/Home/Home';
import { UserTodo } from './pages/UserTodo/UserTodo';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" >
          <Route path=":id" element={<UserTodo />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

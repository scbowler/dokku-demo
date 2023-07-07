import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function readServerData() {
      const resp = await fetch('/api/todos');
      const todos = await resp.json();

      setTodos(todos);
    }

    readServerData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul className="todos">
          {todos.map((t) => (
            <li key={t.todoId}>{t.task}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;

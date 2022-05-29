import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import ListScreen from './screens/ListScreen';
import './App.css';
import FocusScreen from './screens/FocusScreen';
import TaskContext from './contexts/task-store';
import useLocalStorage from './hooks/use-local-storage';
import { Task } from './types';

function App() {
  const [tasks, setTasks] = useLocalStorage<Task[]>('tasks', []);

  return (
    <BrowserRouter>
      <TaskContext.Provider value={[tasks, setTasks]}>
        <nav>
          <NavLink to="/">List View</NavLink>
          <NavLink to="/focus">Focus View</NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<ListScreen />}></Route>
          <Route path="/focus" element={<FocusScreen />}></Route>
        </Routes>
      </TaskContext.Provider>
    </BrowserRouter>
  );
}

export default App;

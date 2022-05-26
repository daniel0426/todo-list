import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import ListScreen from './screens/ListScreen';
import './App.css';
import FocusScreen from './screens/FocusScreen';
import { Task } from './types';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const tasksProps = { tasks, setTasks };
  return (
    <BrowserRouter>
      <nav>
        <NavLink to="/">List View</NavLink>
        <NavLink to="/focus">Focus View</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<ListScreen {...tasksProps} />}></Route>
        <Route path="/focus" element={<FocusScreen {...tasksProps} />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

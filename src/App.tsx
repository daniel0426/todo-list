import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import ListScreen from './screens/ListScreen';
import './App.css';
import FocusScreen from './screens/FocusScreen';
import { Task } from './types';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);


  const updateTaskCompletion = (taskId: string, isComplete: boolean) => {
    setTasks((tasks) =>
      tasks.map((task) => {
        if (task.id === taskId) return { ...task, isComplete };
        return task;
      })
    );
  };

  const tasksApi = { tasks, setTasks, updateTaskCompletion };

  return (
    <BrowserRouter>
      <nav>
        <NavLink to="/">List View</NavLink>
        <NavLink to="/focus">Focus View</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<ListScreen {...tasksApi} />}></Route>
        <Route path="/focus" element={<FocusScreen {...tasksApi} />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

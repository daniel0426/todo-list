import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import ListScreen from './screens/ListScreen';
import './App.css';
import FocusScreen from './screens/FocusScreen';
import { Task } from './types';
import { shuffle } from 'lodash';
import { nanoid } from 'nanoid';
import useLocalStorage from './hooks/use-local-storage';

function App() {
  const [tasks, setTasks] = useLocalStorage<Task[]>('tasks', []);
  const [focusedTaskId, setFocusedTaskId] = useState<string | undefined>(
    undefined
  );

  const addTask = (task: Pick<Task, 'label'>) => {
    const id = nanoid();
    setTasks((tasks) => [
      ...tasks,
      { id, label: task.label, isComplete: false },
    ]);
    if (!focusedTaskId) setFocusedTaskId(id);
  };

  const updateTaskCompletion = (taskId: string, isComplete: boolean) => {
    setTasks((tasks) =>
      tasks.map((task) => {
        if (task.id === taskId) return { ...task, isComplete };
        return task;
      })
    );
  };

  const focusedTask = tasks.find((task) => task.id === focusedTaskId);

  const shuffleFocusedTask = () => {
    setFocusedTaskId(shuffle(tasks.filter((task) => !task.isComplete))[0]?.id);
  };

  const tasksApi = {
    addTask,
    focusedTask,
    tasks,
    setTasks,
    shuffleFocusedTask,
    updateTaskCompletion,
  };

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

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListScreen from './screens/ListScreen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListScreen />}></Route>
        <Route></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

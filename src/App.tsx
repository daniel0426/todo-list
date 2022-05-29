import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import TaskContext from './contexts/task-store';
import useLocalStorage from './hooks/use-local-storage';
import FocusScreen from './screens/FocusScreen';
import ListScreen from './screens/ListScreen';
import { colors, GlobalStyle } from './styles';
import { Task } from './types';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 35px;
`;

const Nav = styled.nav`
  display: flex;
  margin-bottom: 45px;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 460px;
`;

const TabButton = styled(NavLink)`
  width: 120px;
  height: 62px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  background: #000;
  color: #fff;

  &:first-child {
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
  }

  &:last-child {
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
  }

  &.active {
    background-color: ${colors.primary};
    color: #000;
  }
`;

function App() {
  const [tasks, setTasks] = useLocalStorage<Task[]>('tasks', []);

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <TaskContext.Provider value={[tasks, setTasks]}>
          <Layout>
            <Nav>
              <TabButton to="/">List View</TabButton>
              <TabButton to="/focus">Focus View</TabButton>
            </Nav>
            <Wrapper>
              <Routes>
                <Route path="/" element={<ListScreen />}></Route>
                <Route path="/focus" element={<FocusScreen />}></Route>
              </Routes>
            </Wrapper>
          </Layout>
        </TaskContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;

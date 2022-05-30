import React from 'react';
import useTaskStore from '../hooks/use-task-store';
import TextButton from '../components/TextButton';
import styled from 'styled-components';
import Button from '../components/Button';
import Spacer from '../components/Spacer';

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Task = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  flex: 1;
  padding-bottom: 3em;
`;

type Props = {};

const FocusScreen: React.FC<Props> = () => {
  const {
    focusedTask: task,
    shuffleFocusedTask,
    updateTaskCompletion,
  } = useTaskStore();

  const handleMarkCompleted = () => {
    if (task) updateTaskCompletion(task.id, true);
  };

  return task ? (
    <Container>
      <Task>{task.label}</Task>
      <Button onClick={handleMarkCompleted}>Mark completed</Button>
      <Spacer height={40} />
      <TextButton onClick={shuffleFocusedTask}>Nope</TextButton>
    </Container>
  ) : (
    <div>No incomplete tasks. Hooray !</div>
  );
};

export default FocusScreen;

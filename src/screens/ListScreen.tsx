import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import styled from 'styled-components';
import Checkbox from '../components/Checkbox';
import IconButton from '../components/IconButton';
import Spacer from '../components/Spacer';
import TextButton from '../components/TextButton';
import useTaskStore from '../hooks/use-task-store';
import DeleteIcon from '../icons/DeleteIcon';
import { Task } from '../types';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 460px;
`;
const List = styled.div`
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.1);
  padding: 4em 2em;
  display: flex;
  flex-direction: column;
`;

const ListItem = styled.label`
  margin-bottom: 1em;
  display: flex;
  padding: 4px 0;
  font-size: 1.3rem;
  align-items: center;
`;

const DeleteButton = styled(IconButton)`
  visibility: hidden;
  transition: all 0.15s ease-in-out;
  cursor: pointer;
  ${ListItem}:hover & {
    visibility: visible;
  }
`;

const Input = styled.input`
  background: rgba(0, 0, 0, 0.5);
  border: none;
  padding: 1em 2em;
  font-size: 1.2em;
  color: white;
  border-radius: 15px;
  &::placeholder {
    font-size: 1rem;
  }
`;

type Props = {};

const ListScreen: React.FC<Props> = () => {
  const { addTask, tasks, setTasks, updateTaskCompletion } = useTaskStore();
  const [newTaskLabel, setNewTaskLabel] = useState('');

  const handleNewTaskLabelChange = (e: ChangeEvent<HTMLInputElement>) =>
    setNewTaskLabel(e.target.value);

  const handleNewTaskKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && newTaskLabel !== '') {
      addTask({ label: newTaskLabel });
      setNewTaskLabel('');
    }
  };

  const handleTaskCompleteChange =
    (task: Task) => (e: ChangeEvent<HTMLInputElement>) => {
      updateTaskCompletion(task.id, e.target.checked);
    };

  const handleClearClick = () => {
    setTasks((tasks) => tasks.filter((task) => !task.isComplete));
  };

  const handleTaskDeleteClick = (handledTask: Task) => () => {
    setTasks((tasks) => tasks.filter((task) => task.id !== handledTask.id));
  };

  return (
    <Container>
      <List>
        {tasks.map((task) => (
          <ListItem key={task.id}>
            <Checkbox
              checked={task.isComplete}
              onChange={handleTaskCompleteChange(task)}
            />
            <Spacer width={20} />

            {task.label}
            <Spacer flex={1} />
            <DeleteButton onClick={handleTaskDeleteClick(task)}>
              <DeleteIcon />
            </DeleteButton>
          </ListItem>
        ))}
      </List>
      <Spacer height={30} />
      <Input
        type="text"
        value={newTaskLabel}
        onChange={handleNewTaskLabelChange}
        onKeyPress={handleNewTaskKeyPress}
        placeholder="Add a task"
      />
      <Spacer height={30} />
      <TextButton onClick={handleClearClick} style={{ alignSelf: 'center' }}>
        clear completed
      </TextButton>
    </Container>
  );
};

export default ListScreen;

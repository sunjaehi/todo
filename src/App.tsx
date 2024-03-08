import styled from '@emotion/styled';
import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Title } from 'components/Title';
import { Button } from 'components/Button';
import { ToDoItem } from 'components/ToDoItem';
import { ToDoList} from 'components/ToDoList';
import { useState } from 'react';
import { DataView  } from 'components/DataView';
import { TextInput  } from 'components/TextInput';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-diretion: column;
  align-items: center;
  justify-content: center;
  background-color: #eeeeee;
`;
const ToDoInput =styled.div`
  position: absolute;
  top=0;
  left:0;
  bottom:0;
  right:0;
  display:flex;
  align-items:center;
  justify-content: center;
`;
const Background=styled.div`
  position:absolute;
  top=0;
  left:0;
  bottom:0;
  right:0;
  background-color: rgb(0 0 0 / 75%);
`;
const Contents = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #ffffff;
  padding: 32px;
  border-radius: 8px;
  z-index=1;
`; 
const InputContainer=styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

function App() {
  const [toDoList, setToDoList]=useState([
    '리액트 공부하기',
    '운동하기',
    '스프링 공부하기',
  ]);
  const onDelete = (todo: string) => {
    setToDoList(toDoList.filter((item)=> item !== todo));
  };
  const [toDo, setToDo]=useState('');
  const onAdd = () => {
    if (toDo==='') return;
    setToDoList([...toDoList, toDo]);
    setToDo('');
  };

  return (
    <Container>
      <DataView toDoList={toDoList} onDelete={onDelete} />
      <TextInput value={toDo} onChange={setToDo}/>
      <Button label="추가" color="#304FFE" onClick={onAdd}/>
    </Container>
  );
}
//왜안되냐고
export default App;

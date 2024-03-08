import styled from '@emotion/styled';
import React from 'react';
import { ToDoItem } from 'components/ToDoItem';
//import exp from 'constants';

const Container = styled.div`
  display:flex;
  flex-direction: column;
`;

interface Props {
    readonly toDoList: ReadonlyArray<string>;
    readonly onDelete?: ( todo: string) => void;
}
export const ToDoList = ({ toDoList, onDelete}: Props) => {
    return (
        <Container>
            {toDoList.map((todo)=> (
                <ToDoItem
                  key={todo}
                  label={todo}
                  onDelete={()=> {
                    if (typeof onDelete === 'function') onDelete(todo);
                  }}
                />
            ))}
        </Container>
    );
};
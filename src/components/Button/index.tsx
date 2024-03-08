import styled from '@emotion/styled';
import { on } from 'events';
import React from 'react';

interface ContainerProps {
  readonly color : string; //readonly 속성은 이후에 변경할 수 없는 값
}

const Container = styled.button<ContainerProps>`
  border: 0;
  color: #fff;
  background-color: ${(props)=>props.color};
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 4px;
  
  &:hover {
    background-color: ${(props)=>props.color};
    opacity: 0.8;
  }
  &:active {
    box-shadow: inset 5px 5px 10px rgba(0,0,0,0.2);
  }
`;

interface Props {
    readonly label: string;
    readonly color?: string;
    readonly onClick?: () =>void;
}
export const Button = ({label, color='#ff5722',onClick}: Props) => {
    return (
      <Container color={color} onClick={onClick}>
        {label}
      </Container>
    );
};
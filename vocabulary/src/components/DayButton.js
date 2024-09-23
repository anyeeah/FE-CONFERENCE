import React from 'react';
import styled from 'styled-components';

function DayButton({ day, onClick }) {
  return (
    <Button onClick={onClick}>Day {day}</Button>
  );
}

export default DayButton;

const Button = styled.button`
  margin: 5px;
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;
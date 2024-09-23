import React from 'react';
import styled from 'styled-components';

function WordList({ words, toggleWord }) {
  return (
    <List>
      {words.map((word) => (
        <WordItem key={word.id}>
          <Checkbox
            type="checkbox"
            checked={word.learned}
            onChange={() => toggleWord(word.id)}
          />
          {word.text}
        </WordItem>
      ))}
    </List>
  );
}

export default WordList;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const WordItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #f9f9f9;
  margin-bottom: 5px;
  border-radius: 5px;
`;

const Checkbox = styled.input`
  margin-right: 10px;
`;
import React, { useState } from 'react';
import styled from 'styled-components';
import DayButton from './components/DayButton';
import WordList from './components/WordList';
import { useWords } from './hooks/useWords';

function App() {
  const [selectedDay, setSelectedDay] = useState(1);
  const { words, toggleWord } = useWords(selectedDay);

  return (
    <AppContainer>
      <h1>Vocabulary App</h1>
      <div>
        <DayButton day={1} onClick={() => setSelectedDay(1)} />
        <DayButton day={2} onClick={() => setSelectedDay(2)} />
      </div>
      <WordList words={words} toggleWord={toggleWord} />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

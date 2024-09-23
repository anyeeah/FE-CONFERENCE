import { useState, useEffect } from 'react';

const wordData = {
  1: [
    { id: 1, text: 'apple', learned: false },
    { id: 2, text: 'banana', learned: false },
    { id: 3, text: 'orange', learned: false },
  ],
  2: [
    { id: 1, text: 'grape', learned: false },
    { id: 2, text: 'watermelon', learned: false },
    { id: 3, text: 'melon', learned: false },
  ],
};

export function useWords(day) {
  const [words, setWords] = useState([]);

  useEffect(() => {
    setWords(wordData[day] || []);
  }, [day]);

  const toggleWord = (id) => {
    setWords((prevWords) =>
      prevWords.map((word) =>
        word.id === id ? { ...word, learned: !word.learned } : word
      )
    );
  };

  return { words, toggleWord };
}

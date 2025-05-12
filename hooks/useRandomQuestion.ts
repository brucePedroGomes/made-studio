import { useState, useEffect } from 'react';
import questionsData from '../questions.json';
import { QandA } from '../types';

const useRandomQuestion = (): QandA | null => {
  const [randomQuestion, setRandomQuestion] = useState<QandA | null>(null);

  useEffect(() => {
    if (
      Array.isArray(questionsData.questions) &&
      questionsData.questions.length > 0
    ) {
      const randomIndex = Math.floor(
        Math.random() * questionsData.questions.length
      );
      setRandomQuestion(questionsData.questions[randomIndex]);
    }
  }, []);

  return randomQuestion;
};

export default useRandomQuestion;
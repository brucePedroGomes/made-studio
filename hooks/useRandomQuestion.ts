import { useState, useEffect } from 'react';
import questionsData from '../questions.json';
import { QandA } from '../types';

const useRandomQuestion = (): {
  question: QandA | null;
  isLoading: boolean;
} => {
  const [randomQuestion, setRandomQuestion] = useState<QandA | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    if (
      Array.isArray(questionsData.questions) &&
      questionsData.questions.length > 0
    ) {
      const randomIndex = Math.floor(
        Math.random() * questionsData.questions.length
      );
      setRandomQuestion(questionsData.questions[randomIndex]);
    }
    setLoading(false);
  }, []);

  return { question: randomQuestion, isLoading: loading };
};

export default useRandomQuestion;

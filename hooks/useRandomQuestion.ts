import { useState, useEffect } from 'react';
import questionsData from '../questions.json';
import { QandA } from '../types';

const useRandomQuestion = (): {
  question: QandA | null;
  loading: boolean;
} => {
  const [randomQuestion, setRandomQuestion] = useState<QandA | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    // Simulate a small delay for loading, e.g., fetching from an API
    const timer = setTimeout(() => {
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
    }, 500); 

    return () => clearTimeout(timer); 
  }, []);

  return { question: randomQuestion, loading };
};

export default useRandomQuestion;

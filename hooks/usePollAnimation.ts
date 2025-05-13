import { useState, useEffect } from 'react';
import { QandA } from '../types';

type UsePollAnimationProps = {
  selectedAnswerIndex: number | null;
  optionVotes: number[];
  currentTotalVotes: number;
  answers: QandA['answers'];
};

export default function usePollAnimation({
  selectedAnswerIndex,
  optionVotes,
  currentTotalVotes,
  answers,
}: UsePollAnimationProps) {
  const [displayedPercentages, setDisplayedPercentages] = useState<number[]>(() =>
    answers.map(() => 0)
  );

  useEffect(() => {
    if (selectedAnswerIndex !== null) {
      const timerId = setTimeout(() => {
        const newActualPercentages = answers.map((_answer, i) => {
          return currentTotalVotes > 0
            ? (optionVotes[i] / currentTotalVotes) * 100
            : 0;
        });
        setDisplayedPercentages(newActualPercentages);
      }, 10);

      return () => clearTimeout(timerId);
    } else {
      setDisplayedPercentages(answers.map(() => 0));
    }
  }, [selectedAnswerIndex, optionVotes, currentTotalVotes, answers]);

  return displayedPercentages;
}
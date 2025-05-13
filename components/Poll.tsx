import { useState, useMemo, useEffect } from 'react';
import { QandA } from '../types';
import * as S from '../styles/Poll.styles';

type Props = {
  qanda: QandA;
};

export default function Poll({ qanda }: Props) {
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(
    null
  );
  const [optionVotes, setOptionVotes] = useState<number[]>(() =>
    qanda.answers.map((answer) => answer.votes)
  );
  const [currentTotalVotes, setCurrentTotalVotes] = useState<number>(() =>
    qanda.answers.reduce((sum, answer) => sum + answer.votes, 0)
  );
  const [displayedPercentages, setDisplayedPercentages] = useState<number[]>(() =>
    qanda.answers.map(() => 0)
  );

  const handleAnswerClick = (index: number) => {
    if (selectedAnswerIndex === null) {
      setSelectedAnswerIndex(index);
      const newOptionVotes = [...optionVotes];
      newOptionVotes[index] += 1;
      setOptionVotes(newOptionVotes);
      setCurrentTotalVotes((prevTotalVotes) => prevTotalVotes + 1);
    }
  };

  const mostPopularVotes = useMemo(() => {
    if (!optionVotes || optionVotes.length === 0) {
      return 0;
    }
    return Math.max(...optionVotes);
  }, [optionVotes]);

  useEffect(() => {
    if (selectedAnswerIndex !== null) {
      const timerId = setTimeout(() => {
        const newActualPercentages = qanda.answers.map((_answer, i) => {
          return currentTotalVotes > 0
            ? (optionVotes[i] / currentTotalVotes) * 100
            : 0;
        });
        setDisplayedPercentages(newActualPercentages);
      }, 10);

      return () => clearTimeout(timerId);
    } else {
      setDisplayedPercentages(qanda.answers.map(() => 0));
    }
  }, [selectedAnswerIndex, optionVotes, currentTotalVotes, qanda.answers]);

  return (
    <S.PollWrapper>
      <S.QuestionText>{qanda.question.text}</S.QuestionText>
      <S.AnswerList>
        {selectedAnswerIndex === null
          ? qanda.answers.map((answer, index) => (
              <S.AnswerItem key={index} onClick={() => handleAnswerClick(index)}>
                {answer.text}
              </S.AnswerItem>
            ))
          : qanda.answers.map((answer, index) => {
              const actualPercentage =
                currentTotalVotes > 0
                  ? (optionVotes[index] / currentTotalVotes) * 100
                  : 0;
              const isSelected = index === selectedAnswerIndex;
              const isMostPopular =
                optionVotes[index] === mostPopularVotes &&
                currentTotalVotes > 0;
              return (
                <S.ResultItem key={index}>
                  <S.ResultBar
                    percentage={displayedPercentages[index]}
                    isMostPopular={isMostPopular}
                  />
                  <S.ResultContent>
                    <div>
                      <S.AnswerText>{answer.text}</S.AnswerText>
                      {isSelected && (
                        <S.CheckmarkIcon
                          src={require('../static/check-circle.svg')}
                          alt="Selected"
                        />
                      )}
                    </div>
                    <S.PercentageText>
                      {actualPercentage.toFixed(1)}% ({optionVotes[index]})
                    </S.PercentageText>
                  </S.ResultContent>
                </S.ResultItem>
              );
            })}
      </S.AnswerList>
      <S.TotalVotesText>{currentTotalVotes} votes</S.TotalVotesText>
    </S.PollWrapper>
  );
}

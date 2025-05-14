import React from 'react';
import { QandA } from '../types';
import AnswerOption from './AnswerOption';
import AnswerResult from './AnswerResult';
import * as S from '../styles/Poll.styles';

type AnswerListRendererProps = {
  answers: QandA['answers'];
  selectedAnswerIndex: number | null;
  handleAnswerClick: (index: number) => void;
  votesForEachAnswerOption: number[];
  displayedPercentages: number[];
  currentTotalVotes: number;
  highestVoteCountAmongOptions: number;
};

const AnswerListRenderer: React.FC<AnswerListRendererProps> = ({
  answers,
  selectedAnswerIndex,
  handleAnswerClick,
  votesForEachAnswerOption,
  displayedPercentages,
  currentTotalVotes,
  highestVoteCountAmongOptions,
}) => {
  return (
    <S.AnswerList>
      {answers.map((answer, index) => {
        if (selectedAnswerIndex === null) {
          return (
            <AnswerOption
              key={answer.text + index} 
              answerText={answer.text}
              onClick={() => handleAnswerClick(index)}
            />
          );
        } else {
          return (
            <AnswerResult
              key={answer.text + index}
              answerText={answer.text}
              thisSpecificAnswerVotes={votesForEachAnswerOption[index]}
              isSelected={index === selectedAnswerIndex}
              animatedBarFillPercentage={displayedPercentages[index]}
              allVotesInThisPoll={currentTotalVotes}
              topVoteCountInThisPoll={highestVoteCountAmongOptions}
            />
          );
        }
      })}
    </S.AnswerList>
  );
};

export default AnswerListRenderer;
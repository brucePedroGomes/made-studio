import React from 'react';
import CheckCircleIcon from '../static/check-circle.svg';
import * as S from '../styles/Poll.styles';

type Props = {
  answerText: string;
  thisSpecificAnswerVotes: number;
  isSelected: boolean;
  animatedBarFillPercentage: number;
  allVotesInThisPoll: number;
  topVoteCountInThisPoll: number;
};

const AnswerResult: React.FC<Props> = ({
  answerText,
  thisSpecificAnswerVotes,
  isSelected,
  animatedBarFillPercentage,
  allVotesInThisPoll,
  topVoteCountInThisPoll,
}) => {
  const percentageForThisAnswer =
    allVotesInThisPoll > 0
      ? (thisSpecificAnswerVotes / allVotesInThisPoll) * 100
      : 0;

  const thisAnswerIsTheMostPopular =
    allVotesInThisPoll > 0 &&
    thisSpecificAnswerVotes === topVoteCountInThisPoll;

  const formattedPercentageText = percentageForThisAnswer.toFixed(1);

  return (
    <S.ResultItem>
      <S.ResultBar
        percentage={animatedBarFillPercentage}
        isMostPopular={thisAnswerIsTheMostPopular}
      />
      <S.ResultContent>
        <div>
          <S.AnswerText isMostPopular={thisAnswerIsTheMostPopular}>
            {answerText}
          </S.AnswerText>
          {isSelected && (
            <S.CheckmarkIcon src={CheckCircleIcon} alt="Selected" />
          )}
        </div>
        <S.PercentageText isMostPopular={thisAnswerIsTheMostPopular}>
          {formattedPercentageText}% ({thisSpecificAnswerVotes})
        </S.PercentageText>
      </S.ResultContent>
    </S.ResultItem>
  );
};

export default AnswerResult;
import { useState, useMemo } from 'react';
import usePollAnimation from '../hooks/usePollAnimation';
import { QandA } from '../types';
import * as S from '../styles/Poll.styles';
import AnswerListRenderer from './AnswerListRenderer'; // Import the new component

type Props = {
  qanda: QandA;
};

const Poll: React.FC<Props> = ({ qanda }) => {
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(
    null
  );
  const [votesForEachAnswerOption, setVotesForEachAnswerOption] = useState<number[]>(() =>
    qanda.answers.map((answer) => answer.votes)
  );

  const currentTotalVotes = useMemo(() => {
    return votesForEachAnswerOption.reduce((sum, votes) => sum + votes, 0);
  }, [votesForEachAnswerOption]);

  const displayedPercentages = usePollAnimation({
    selectedAnswerIndex,
    optionVotes: votesForEachAnswerOption,
    currentTotalVotes,
    answers: qanda.answers,
  });

  const handleAnswerClick = (index: number) => {
    if (selectedAnswerIndex === null) {
      setSelectedAnswerIndex(index);
      setVotesForEachAnswerOption((prevVotes) =>
        prevVotes.map((vote, i) => (i === index ? vote + 1 : vote))
      );
    }
  };

  const highestVoteCountAmongOptions = useMemo(() => {
    if (!votesForEachAnswerOption || votesForEachAnswerOption.length === 0) {
      return 0;
    }
    return Math.max(...votesForEachAnswerOption);
  }, [votesForEachAnswerOption]);

  return (
    <S.PollWrapper>
      <S.QuestionText>{qanda.question.text}</S.QuestionText>
      <AnswerListRenderer
        answers={qanda.answers}
        selectedAnswerIndex={selectedAnswerIndex}
        handleAnswerClick={handleAnswerClick}
        votesForEachAnswerOption={votesForEachAnswerOption}
        displayedPercentages={displayedPercentages}
        currentTotalVotes={currentTotalVotes}
        highestVoteCountAmongOptions={highestVoteCountAmongOptions}
      />
      <S.TotalVotesText>{currentTotalVotes} votes</S.TotalVotesText>
    </S.PollWrapper>
  );
};

export default Poll;

import * as React from 'react';
import styled from 'styled-components';
import { QandA } from '../types';

type Props = {
  qanda: QandA;
};

const PollWrapper = styled.div`
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const QuestionText = styled.h2`
  font-size: 1.2em;
  margin-bottom: 15px;
  color: #333;
`;

const AnswerList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const AnswerItem = styled.li`
  padding: 10px 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 10px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #f9f9f9;
  }
`;

const ResultItem = styled.li<{ isSelected: boolean }>`
  padding: 10px 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 10px;
  position: relative;
  overflow: hidden;
  background-color: ${(props) => (props.isSelected ? '#e6f7ff' : '#fff')};
  border-color: ${(props) => (props.isSelected ? '#91d5ff' : '#ddd')};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ResultBar = styled.div<{ percentage: number }>`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: ${(props) => props.percentage}%;
  background-color: #e6f7ff;
  opacity: 0.6;
  z-index: 1;
  transition: width 0.5s ease-in-out;
`;

const ResultContent = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

const AnswerText = styled.span`
  margin-right: 10px;
`;

const PercentageText = styled.span`
  font-weight: bold;
  color: #555;
  margin-left: 10px;
`;

const CheckmarkIcon = styled.img`
  width: 16px;
  height: 16px;
  margin-left: 8px;
  vertical-align: middle;
`;

export default function Poll({ qanda }: Props) {
  const [selectedAnswerIndex, setSelectedAnswerIndex] = React.useState<number | null>(null);

  const handleAnswerClick = (index: number) => {
    setSelectedAnswerIndex(index);
  };

  const totalVotes = React.useMemo(() => {
    return qanda.answers.reduce((sum, answer) => sum + answer.votes, 0);
  }, [qanda.answers]);

  return (
    <PollWrapper>
      <QuestionText>{qanda.question.text}</QuestionText>
      <AnswerList>
        {selectedAnswerIndex === null ? (
          qanda.answers.map((answer, index) => (
            <AnswerItem key={index} onClick={() => handleAnswerClick(index)}>
              {answer.text}
            </AnswerItem>
          ))
        ) : (
          qanda.answers.map((answer, index) => {
            const percentage = totalVotes > 0 ? (answer.votes / totalVotes) * 100 : 0;
            const isSelected = index === selectedAnswerIndex;
            return (
              <ResultItem key={index} isSelected={isSelected}>
                <ResultBar percentage={percentage} />
                <ResultContent>
                  <div>
                    <AnswerText>{answer.text}</AnswerText>
                    {isSelected && <CheckmarkIcon src={require('../static/check-circle.svg').default} alt="Selected" />}
                  </div>
                  <PercentageText>{percentage.toFixed(1)}% ({answer.votes})</PercentageText>
                </ResultContent>
              </ResultItem>
            );
          })
        )}
      </AnswerList>
    </PollWrapper>
  );
}

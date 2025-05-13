import styled from 'styled-components';

export const PollWrapper = styled.div`
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

export const QuestionText = styled.h2`
  font-size: 1.2em;
  margin-bottom: 15px;
  color: #333;
`;

export const AnswerList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const AnswerItem = styled.li`
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

export const ResultItem = styled.li`
  padding: 10px 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 10px;
  position: relative;
  overflow: hidden;
  background-color: #fff;
  border-color: #ddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ResultBar = styled.div<{ percentage: number; isMostPopular: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: ${(props) => props.percentage}%;
  background-color: ${(props) => (props.isMostPopular ? '#00FFFF' : '#DCDCDC')};
  z-index: 1;
  transition: width 0.5s ease-in-out, background-color 0.5s ease-in-out;
`;

export const ResultContent = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

export const AnswerText = styled.span`
  margin-right: 10px;
`;

export const PercentageText = styled.span`
  font-weight: bold;
  color: #555;
  margin-left: 10px;
`;

export const CheckmarkIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-left: 8px;
  vertical-align: middle;
`;
export const TotalVotesText = styled.p`
  text-align: left;
  font-size: 0.9em;
  font-weight: semi-bold;
  color: #666;
  margin-top: 15px;
`;
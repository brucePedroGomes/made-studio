import styled from 'styled-components';
import { themeColors } from './theme';

export const PollWrapper = styled.div`
  border: 1px solid ${themeColors.borderVeryLightGray};
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  background-color: ${themeColors.white};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

export const QuestionText = styled.h2`
  font-size: 1.25rem; 
  font-weight: 600;
  margin-bottom: 15px;
  color: ${themeColors.textHeading};
`;

export const AnswerList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const AnswerItem = styled.li`
  padding: 10px 15px;
  border: 1px solid ${themeColors.borderLightGray};
  border-radius: 4px;
  margin-bottom: 10px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${themeColors.backgroundVeryLightGray};
  }
`;

export const ResultItem = styled.li`
  padding: 10px 15px;
  border: 1px solid ${themeColors.borderLightGray};
  border-radius: 4px;
  margin-bottom: 10px;
  position: relative;
  overflow: hidden;
  background-color: ${themeColors.white};
  border-color: ${themeColors.borderLightGray};
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
  background-color: ${(props) => (props.isMostPopular ? themeColors.pollResultBarMostPopular : themeColors.backgroundGray)};
  z-index: 1;
  transition: width 0.5s ease-in-out;
`;

export const ResultContent = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;

  > div:first-of-type {
    display: flex;
    align-items: center;
  }
`;

export const AnswerText = styled.span<{ isMostPopular?: boolean }>`
  font-size: 1rem; 
  font-weight: ${(props) => (props.isMostPopular ? '600' : '500')};
  color: ${(props) => (props.isMostPopular ? themeColors.pollOptionTextMostPopular : themeColors.pollOptionText)};
  margin-right: 10px;
`;

export const PercentageText = styled.span<{ isMostPopular?: boolean }>`
  font-size: 1rem;
  font-weight: ${(props) => (props.isMostPopular ? '600' : '500')};
  color: ${(props) => (props.isMostPopular ? themeColors.pollOptionTextMostPopular : themeColors.pollOptionText)};
  margin-left: 10px;
`;

export const CheckmarkIcon = styled.img`
  width: 32px;
  height: 32px;
  margin-left: 8px;
  flex-shrink: 0;
`;
export const TotalVotesText = styled.p`
  text-align: left;
  font-size: 1rem;
  font-weight: 500; 
  color: ${themeColors.textLight};
  margin-top: 15px;
`;
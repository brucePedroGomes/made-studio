import styled, { keyframes, css } from 'styled-components';
import { themeColors } from '../styles/theme';
import * as S from '../styles/Poll.styles';

const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

const skeletonBaseStyles = css`
  background-color: ${themeColors.backgroundLightGray};
  background-image: linear-gradient(
    90deg,
    ${themeColors.backgroundLightGray},
    ${themeColors.backgroundVeryLightGray},
    ${themeColors.backgroundLightGray}
  );
  background-size: 200px 100%;
  background-repeat: no-repeat;
  border-radius: 4px;
  animation: ${shimmer} 1.5s infinite linear;
`;

const SkeletonQuestion = styled.div`
  ${skeletonBaseStyles}
  height: 20px; /* Approximate height of QuestionText */
  width: 70%;
  margin-bottom: 15px;
`;

const SkeletonAnswer = styled.div`
  ${skeletonBaseStyles}
  height: 40px; /* Approximate height of AnswerItem/ResultItem */
  margin-bottom: 10px;
`;

const SkeletonVotes = styled.div`
  ${skeletonBaseStyles}
  height: 16px; /* Approximate height of TotalVotesText */
  width: 30%;
  margin-top: 15px;
`;

const PollSkeleton: React.FC = () => {
  return (
    <S.PollWrapper>
      <SkeletonQuestion />
      <S.AnswerList>
        <SkeletonAnswer />
        <SkeletonAnswer />
        <SkeletonAnswer />
      </S.AnswerList>
      <SkeletonVotes />
    </S.PollWrapper>
  );
};

export default PollSkeleton;
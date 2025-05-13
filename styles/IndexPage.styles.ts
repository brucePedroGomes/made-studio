import styled from 'styled-components';
import { themeColors } from './theme';

export const IndexPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const MainContent = styled.main`
  flex-grow: 1;
  padding: 1rem;
`;

export const LoadingIndicator = styled.p`
  text-align: center;
  font-style: italic;
  color: ${themeColors.textSubtle};
  padding: 2rem 0;
`;
import styled from 'styled-components';
import { themeColors } from './theme';

export const HeaderWrapper = styled.header`
  background-color: ${themeColors.backgroundLightGray};
  padding: 1rem;
  text-align: center;
  border-bottom: 1px solid ${themeColors.borderLightGray};
  width: 100%;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 1.5rem;
  color: ${themeColors.textHeading};
`;
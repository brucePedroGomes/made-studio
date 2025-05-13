import styled from 'styled-components';
import { themeColors } from './theme';

export const FooterWrapper = styled.footer`
  background-color: ${themeColors.backgroundLightGray};
  padding: 1rem;
  text-align: center;
  border-top: 1px solid ${themeColors.borderLightGray};
  margin-top: 2rem;
  width: 100%;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

export const FooterText = styled.p`
  margin: 0;
  font-size: 0.9rem;
  color: ${themeColors.textSubtle};
`;
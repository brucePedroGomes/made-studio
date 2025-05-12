import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #f0f0f0;
  padding: 1rem;
  text-align: center;
  border-top: 1px solid #ddd;
  margin-top: 2rem;
  width: 100%;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 0.9rem;
  color: #666;
`;

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <FooterText>Test completed by Bruce 🦇</FooterText>
    </FooterWrapper>
  );
};

export default Footer;
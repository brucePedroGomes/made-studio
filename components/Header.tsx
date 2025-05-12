import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background-color: #f0f0f0;
  padding: 1rem;
  text-align: center;
  border-bottom: 1px solid #ddd;
  width: 100%;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 1.5rem;
  color: #333;
`;

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <Title>Poll Application</Title>
    </HeaderWrapper>
  );
};

export default Header;
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import GlobalStyles from '../components/GlobalStyles';
import Header from '../components/Header';
import Footer from '../components/Footer';
import questionsData from '../questions.json';
import Poll from '../components/Poll';
import { QandA } from '../types';

const IndexPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex-grow: 1;
  padding: 1rem;
`;

export default () => {
  const [randomQuestion, setRandomQuestion] = useState<QandA | null>(null);

  useEffect(() => {
    if (
      Array.isArray(questionsData.questions) &&
      questionsData.questions.length > 0
    ) {
      const randomIndex = Math.floor(
        Math.random() * questionsData.questions.length
      );
      setRandomQuestion(questionsData.questions[randomIndex]);
    }
  }, [questionsData]);

  return (
    <IndexPageWrapper>
      <GlobalStyles />
      <Header />
      <MainContent>
        <h1>Welcome to the Poll!</h1>
        <p>Ready to share your opinion? Answer the question below!</p>
        {randomQuestion && <Poll qanda={randomQuestion} />}
        <p>Thanks for participating!</p>
      </MainContent>
      <Footer />
    </IndexPageWrapper>
  );
};

import React from 'react';
import * as S from '../styles/IndexPage.styles';
import GlobalStyles from '../components/GlobalStyles';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Poll from '../components/Poll';
import useRandomQuestion from '../hooks/useRandomQuestion';

export default () => {
  const { question, isLoading } = useRandomQuestion();

  return (
    <S.IndexPageWrapper>
      <GlobalStyles />
      <Header />
      <S.MainContent>
        <h1>Welcome to the Poll!</h1>
        <p>Ready to share your opinion? Answer the question below!</p>
        {isLoading ? (
          <S.LoadingIndicator>Loading question...</S.LoadingIndicator>
        ) : (
          question && <Poll qanda={question} />
        )}
        <p>Thanks for participating!</p>
      </S.MainContent>
      <Footer />
    </S.IndexPageWrapper>
  );
};

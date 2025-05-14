import React from 'react';
import * as S from '../styles/IndexPage.styles';
import GlobalStyles from '../styles/GlobalStyles';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Poll from '../components/Poll';
import PollSkeleton from '../components/PollSkeleton';
import useRandomQuestion from '../hooks/useRandomQuestion';

import { NextPage } from 'next';

const HomePage: NextPage = () => {
  const { question, loading } = useRandomQuestion();

  return (
    <S.IndexPageWrapper>
      <GlobalStyles />
      <Header />
      <S.MainContent>
        <h1>Welcome to the Poll!</h1>
        <p>Ready to share your opinion? Answer the question below!</p>
        {loading && <PollSkeleton />}
        {!loading && question && <Poll qanda={question} />}
        {!loading && !question && <p>No question available at the moment.</p>}
        <p>Thanks for participating!</p>
      </S.MainContent>
      <Footer />
    </S.IndexPageWrapper>
  );
};

export default HomePage;

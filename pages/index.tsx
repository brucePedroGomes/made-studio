import React from 'react';
import { IndexPageWrapper, MainContent } from '../styles/IndexPage.styles';
import GlobalStyles from '../components/GlobalStyles';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Poll from '../components/Poll';
import useRandomQuestion from '../hooks/useRandomQuestion';

export default () => {
  const randomQuestion = useRandomQuestion();

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

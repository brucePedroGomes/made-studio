import React from 'react';
import * as S from '../styles/Poll.styles';

type Props = {
  answerText: string;
  onClick: () => void;
};

const AnswerOption: React.FC<Props> = ({ answerText, onClick }) => {
  return (
    <S.AnswerItem onClick={onClick}>
      {answerText}
    </S.AnswerItem>
  );
};

export default AnswerOption;
import * as S from './styles';
import React from 'react';
import { TextProps } from 'react-native';

type InputProps = {
  text: string;
  icon: any;
};

const Input: React.FC<InputProps> = ({ text, icon }) => (
      <S.ContainerSearch>
        <S.SearchInput placeholder={text}></S.SearchInput>
        <S.IconSearch source={icon} />
      </S.ContainerSearch>
);

export default Input;

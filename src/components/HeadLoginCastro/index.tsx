import * as S from './styles';
import React from 'react';
import Logo from '@components/Logo';

const HeadLoginCadastro = () => (
  <S.Container>
    <Logo></Logo> 
    <S.ImageHead source={require('@assets/Image.png')}/>
  </S.Container>
)

export default HeadLoginCadastro;

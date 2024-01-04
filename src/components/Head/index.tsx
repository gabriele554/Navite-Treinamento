import * as S from './styles';
import React from 'react';

const Head = () => (
  <S.ContainerHead>
    <S.Icon source={require('@assets/Hamburger_LG.png')}/>
    <S.ContainerLogo>
      <S.ImgLogo source={require('@assets/Logo1.png')}/>
      <S.TextLogo>
        PIUPIUWER
      </S.TextLogo>
    </S.ContainerLogo>
  </S.ContainerHead>
)

export default Head;

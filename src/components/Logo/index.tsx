import * as S from './styles';
import React from 'react';

const Logo = () => (
    <S.ContainerLogo>
      <S.ImgLogo source={require('@assets/Logo1.png')}/>
      <S.TextLogo>
        PIUPIUWER
      </S.TextLogo>
    </S.ContainerLogo>
)

export default Logo;

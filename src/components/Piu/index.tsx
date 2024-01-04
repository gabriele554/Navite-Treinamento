import * as S from './styles';
import React from 'react';

type PiuProps = {
    name: string;
    user_name: string;
    photo: string;
    text: string;
    compartilhar: number;
    comentar: number;
    curtir: number;
};

const Piu: React.FC<PiuProps> = ({ name, user_name, photo, text, compartilhar, comentar, curtir }) => (
  <S.ContainerPiu>
    <S.Photo source={{uri: photo}}/>
    <S.ContainerText>
      <S.ConatinerNames>
        <S.FirstName>{name}</S.FirstName>
        <S.UserName>{user_name}</S.UserName>
      </S.ConatinerNames>
      <S.TextPiu>{text} </S.TextPiu>
      <S.ContainerButtons>
        <S.ContainerIcon>
          <S.Icon source={require('@assets/Arrow_Reload_02.png')}/>
          <S.number>{compartilhar}</S.number>
        </S.ContainerIcon>
        <S.ContainerIcon>
          <S.Icon source={require('@assets/Chat_Circle.png')}/>
          <S.number>{comentar}</S.number>
        </S.ContainerIcon>
        <S.ContainerIcon>
          <S.Icon source={require('@assets/Heart_02.png')}/>
          <S.number>{curtir}</S.number>
        </S.ContainerIcon>
      </S.ContainerButtons>
    </S.ContainerText>
  </S.ContainerPiu>
);

export default Piu;

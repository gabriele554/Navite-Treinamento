import Head from '@components/Head';
import * as S from './styles';
import Input from '@components/Input';
import React, { useState } from 'react';
import Piu from '@components/Piu';
import HeadLoginCadastro from '@components/HeadLoginCastro';

const Cadastro = ({navigation}) => {
  return(
    <S.Wrapper>
      <HeadLoginCadastro/>
      <S.Container>
        <S.Title>Cadastre-se</S.Title>
        <Input text={'Nome'} icon={undefined}/>
        <Input text={'Usuário'} icon={undefined}/>
        <Input text={'E-mail'} icon={undefined}/>
        <S.TextoAzul>Usar Celular</S.TextoAzul>
        <Input text={'Senha'} icon={require('@assets/Senha.png')}/>
        <S.ContainerButton>
          <S.ButtonPage title='Entrar' color='#ECEDEE' onPress={() => navigation.navigate('Home')}/>
        </S.ContainerButton>
        <S.ContainerLogin>
          <S.Texto>Já tem uma conta?</S.Texto>
          <S.ButtonCadastro title='Faça login' color='#3E63DD' onPress={() => navigation.navigate('Login')}></S.ButtonCadastro>
        </S.ContainerLogin>
      </S.Container>
    </S.Wrapper>
  );
};


export default Cadastro;

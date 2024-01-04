import Head from '@components/Head';
import * as S from './styles';
import Input from '@components/Input';
import React from 'react';
import HeadLoginCadastro from '@components/HeadLoginCastro';

const Login = ({navigation}) => {
  return(
    <S.Wrapper>
      <HeadLoginCadastro/>
      <S.Container>
        <S.Title>Login</S.Title>
        <Input text={'Celular, e-mail ou nome de usuário'} icon={require('@assets/Carta.png')}/>
        <Input text={'Senha'} icon={require('@assets/Senha.png')}/>
        <S.EsquecerSenha>Esqueceu sua senha?</S.EsquecerSenha>
        <S.ContainerButton>
          <S.ButtonPage title='Entrar' color='#ECEDEE' onPress={() => navigation.navigate('Home')}/>
        </S.ContainerButton>
        <S.ContainerCadastro>
          <S.Texto>Ainda não tem uma conta?</S.Texto>
          <S.ButtonCadastro title='Cadastre-se' color='#3E63DD' onPress={() => navigation.navigate('Cadastro')}></S.ButtonCadastro>
        </S.ContainerCadastro>
      </S.Container>
    </S.Wrapper>
  );
};


export default Login;

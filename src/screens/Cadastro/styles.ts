import { Text, View, Image, ScrollView,TextInput, Button } from 'react-native';
import styled from 'styled-components/native';

export const Wrapper = styled(View)`
  flex: 1;
  background: #1A1D1E;
`;

export const Container = styled(View)`
margin-top:16%;
`;

export const Title = styled(Text)`
margin-left: 5%;
margin-bottom: 4%;
color: #ECEDEE;
font-size: 40%;
font-style: normal;
font-weight: 400;
line-height: normal;
`;

export const TextoAzul = styled(Text)`
color: #3E63DD;
font-size: 12px;
font-style: normal;
font-weight: 400;
margin-left: 6%;
margin-top: 4%;
`;

export const ContainerButton = styled(View)`
width: 80%;
margin-left:10%;
margin-top:12%;
height: 36px;
justify-content: center;
align-items: center;
border-radius: 16px;
background-color: #3E63DD;
`;
export const ButtonPage = styled(Button)`
color: #ECEDEE;
`;

export const ContainerLogin = styled(View)`
flex-direction:row;
align-items: center;
margin-left:24%;
margin-top:2%;
`;

export const Texto = styled(Text)`
color:  #ECEDEE;
text-align: center;
font-size: 14px;
font-style: normal;
font-weight: 400;
margin-top:1%;
`;

export const ButtonCadastro = styled(Button)`
color:#3E63DD;
width: 16px;
height: 8px;
`;

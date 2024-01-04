import { View } from 'react-native';
import { Text } from 'react-native';
import { Image } from 'react-native';
import styled, { css } from 'styled-components/native';

export const ContainerPiu = styled(View)`
flex-direction: row;
width: 90%;
margin-left:5%;
margin-top:4%;
padding: 13px 7px 13px 8px;
border-radius: 16px;
background: #202425;
`;

export const Photo = styled(Image)`
  width: 56px;
  height:56px;
  padding: 2% 2% 2% 2%;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 50%;
  background: #FFF;
  border: 2px solid #004C97;
  margin-left:4%;
`;

export const ContainerText = styled(View)`
  margin-left: 4%;
`;

export const ConatinerNames = styled(View)`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;

`;

export const FirstName = styled(Text)`
color: #ECEDEE;
text-align: center;
font-size: 13px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin-top:8px;
`;

export const UserName = styled(Text)`
color: #ECEDEE;
text-align: center;
font-feature-settings: 'clig' off, 'liga' off;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 24px; /* 200% */
letter-spacing: 0.5px;
margin-top:2px;
`;

export const TextPiu = styled(Text)`
color: #ECEDEE;
font-size: 13px;
font-style: normal;
font-weight: 400;
line-height: normal;
width: 254px;
margin-top: 16px;
`;

export const ContainerButtons = styled(View)`
flex-direction:row;
width:80px
margin-top:8px;
`;

export const Icon = styled(Image)`
width: 16px;
height: 16px;
margin-top:16px;
margin-right:8px;
`;

export const ContainerIcon = styled(View)`
flex-direction: row;
margin-right: 24px;
`;

export const number = styled(Text)`
color: #ECEDEE;
font-size: 13px;
font-style: normal;
font-weight: 500;
line-height: normal;
letter-spacing: 3.25px;
margin-top:16px
`;


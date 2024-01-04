import { Text, View, Image, ScrollView,TextInput, Button } from 'react-native';
import styled from 'styled-components/native';

export const Wrapper = styled(View)`
  flex: 1;
  align-items: center;
  background: ${({ theme }) => theme.colors.primary.main };
`;

export const StyledText = styled(Text)`
  color: ${({ theme }) => theme.colors.highEmphasis};
  margin-top: 32px;
`;

export const ContainerFeed = styled(ScrollView)`
  background: #151718;
  width: 100%;
  height: 100%;

`;

export const ContainerSearch = styled(View)`
flex-direction:row;
width: 90%;
height: 40px;
padding: 8px;
justify-content: space-between;
align-items: center;
border-radius: 8px;
background: #4C5155;
margin-top: 28px;
margin-left: 5%;
`;

export const SearchInput = styled(TextInput)`
color: #ECEDEE;
text-align: center;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 24px; /* 200% */
letter-spacing: 0.5px;
`;

export const IconSearch = styled(Image)`
  width: 21px;
  height: 21px;
  flex-shrink: 0;
`;

export const ContainerNovoPiu = styled(View)`
  padding: 19px 20px 19px 21px;
  border-radius: 16px;
  background: #4C5155;
  width: 90%;
  margin-left: 5%;
  margin-top: 4%;
`;

export const InputPiar = styled(TextInput)`
color: #ECEDEE
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 16px; /* 200% */
letter-spacing: 0.5px;
`;

export const ContainerIcons = styled(View)`
  width: 50%;
  margin-right: 24%;
  flex-direction:row;
`;

export const Icons = styled(Image)`
width: 16px;
height: 16px;
margin-right: 8px;
`;

export const SendButton = styled(Button)`
  margin-left: 64px;
  width: 16px;
  height: 16px;
`;

export const Container = styled(View)`
flex-direction:row;
margin-top:16%;
align-items: center;
`;


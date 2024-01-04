import { View } from 'react-native';
import { TextInput } from 'react-native';
import { Image } from 'react-native';
import styled, { css } from 'styled-components/native';

export const ContainerSearch = styled(View)`
flex-direction:row;
width: 90%;
height: 40px;
padding: 8px;
justify-content: space-between;
align-items: center;
border-radius: 8px;
background: #4C5155;
margin-top: 4%;
margin-left: 5%;
`;

export const SearchInput = styled(TextInput)`
color: #ECEDEE;
text-align: center;
font-size: 12px;
font-style: normal;
font-weight: 400;

letter-spacing: 0.5px;
`;

export const IconSearch = styled(Image)`
  width: 21px;
  height: 21px;
  flex-shrink: 0;
`;
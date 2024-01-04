import { View } from 'react-native';
import { Text } from 'react-native';
import { Image } from 'react-native';
import styled, { css } from 'styled-components/native';

export const ContainerLogo = styled(View)`
display: flex;
flex-direction: row;
align-items: center;
margin-top: 64px;
`;

export const TextLogo = styled(Text)`
  color: #ECEDEE;
  font-size: 20px;
  letter-spacing: 3.5px;
  margin-left:8px;
`;

export const ImgLogo = styled(Image)`
  width: 20px;
  height: 21px;
`;

export const Icon = styled(Image)`
  margin-top: 72px;
  margin-left:12px;
  margin-right:80px;
  width: 31px;
  height: 31px;
`;
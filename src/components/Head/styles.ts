import { View } from 'react-native';
import { Text } from 'react-native';
import { Image } from 'react-native';
import styled, { css } from 'styled-components/native';

export const StyledHeading = styled(Text)<{ color?: string }>`
  ${({ theme, color }) => css`
    font-size: 32px;
    margin-bottom: 24px;
    color: ${color || `${theme.colors.black}`};
  `}
`;

export const ContainerHead = styled(View)`
  width: 100%;
  height: 12%;
  flex-shrink: 0;
  background-color: #33A8EB;
  flex-direction: row;
`;

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
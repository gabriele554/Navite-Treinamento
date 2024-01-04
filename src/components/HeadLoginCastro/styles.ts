import { View } from 'react-native';
import { Text } from 'react-native';
import { Image } from 'react-native';
import styled, { css } from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(View)`
width: 100%;
height: 30%;
flex-shrink: 0;
background-color:#33A8EB;
align-items: center;
`;

export const ImageHead = styled(Image)`
width: 30%;
height: 50%;
margin-top: 8%;
`;
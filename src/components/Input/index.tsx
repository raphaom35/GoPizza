import React from 'react';
import { useTheme } from 'styled-components';
import { TextInputProps } from 'react-native';

 import { Container,TypeProps } from './styles';

type Props = TextInputProps & {
    type?: TypeProps;
}

export function Input({type='primary', ...rest}: Props) {
  return (
   <Container type={type} {...rest}/>
  );
}
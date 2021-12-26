import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { useTheme } from 'styled-components';
import {Input} from '../../../src/components/Input';
import {Button} from '../../../src/components/Button';
import { 
  Container,
  Content,
  Title,
  Brand,
  ForgotPasswordLabel,
  ForgotPasswordButton 
} from './styles';
import brandImg from '../../../src/assets/brand.png';

export function SignIn(){
  const theme= useTheme();
  return (
   <Container>
     <KeyboardAvoidingView behavior={Platform.OS==='ios'? 'padding':undefined} >
      <Content>
        <Brand source={brandImg} />
        <Title>Login</Title>
     <Input
      placeholder="Email"
      type="secondary"
      autoCorrect={false}
      autoCapitalize="none"
     />
    <Input
      placeholder="Senha"
      type="secondary"
      secureTextEntry
     />
     <ForgotPasswordButton>
       <ForgotPasswordLabel>Esqueci minha senha</ForgotPasswordLabel>
     </ForgotPasswordButton>
     <Button
      title="Entrar"
      type="secondary"
     />
     </Content>
     </KeyboardAvoidingView>
   </Container>
  );
}
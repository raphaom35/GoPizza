import React,{useState} from 'react';
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
import { useAuth } from '../../../src/hooks/auth';
export function SignIn(){
  const [email,setEmail]= useState('');
  const [password,setPassword]= useState('');
  const {signIn,isLogging} = useAuth();

  function handleSignIn(){
    signIn(email,password);
    //console.log(email,password);
  }
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
      onChangeText={setEmail}
     />
    <Input
      placeholder="Senha"
      type="secondary"
      secureTextEntry
      onChangeText={setPassword}
     />
     <ForgotPasswordButton
      onPress={handleSignIn}
     >
       <ForgotPasswordLabel>Esqueci minha senha</ForgotPasswordLabel>
     </ForgotPasswordButton>
     <Button
      title="Entrar"
      type="secondary"
      onPress={handleSignIn}
      isLoading={isLogging}
     />
     </Content>
     </KeyboardAvoidingView>
   </Container>
  );
}
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {
  Container,
  InputArea,
  CustomButton,
  CustomButtonText,
  SignMessageButton,
  SignMessageButtonText,
  SignMessageButtonTextBold,
} from './styles';

import Api from '../../../Api';

import LockIcon from '../../../assets/lock.svg';
import EmailIcon from '../../../assets/email.svg';
import BarberLogo from '../../../assets/barber.svg';
import SignInput from '../../../components/SignInput';

export default function () {
  const navigation = useNavigation();

  const [emailField, setEmailField] = useState('');
  const [passwordField, setPasswordField] = useState('');

  const handleSignClick = async () => {
    if (emailField !== '' && passwordField !== '') {
      let json = await Api.signIn(emailField, passwordField);

      if (json.token) {
        alert('DEU CERTO!');
      } else {
        alert('E-mail e/ou senha errados!');
      }
    } else {
      alert('Preencha os campos!');
    }
  };

  const handleMessageButtonClick = () => {
    navigation.reset({
      routes: [{name: 'SignUp'}],
    });
  };

  return (
    <Container>
      <BarberLogo width="100%" height="160" />

      <InputArea>
        <SignInput
          IconSvg={EmailIcon}
          placeholder="Digite seu e-mail"
          value={emailField}
          onChangeText={(value: string) => setEmailField(value)}
        />

        <SignInput
          IconSvg={LockIcon}
          placeholder="Digite sua senha"
          value={passwordField}
          onChangeText={(value: string) => setPasswordField(value)}
          password={true}
        />

        <CustomButton onPress={handleSignClick}>
          <CustomButtonText>Login</CustomButtonText>
        </CustomButton>
      </InputArea>

      <SignMessageButton onPress={handleMessageButtonClick}>
        <SignMessageButtonText>
          Ainda não possui uma conta?
        </SignMessageButtonText>
        <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
      </SignMessageButton>
    </Container>
  );
}

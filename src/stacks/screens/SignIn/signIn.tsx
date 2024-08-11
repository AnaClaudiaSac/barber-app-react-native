import React from 'react';
import {Text} from 'react-native';
import {Container} from './styles';
import styled from 'styled-components';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export default function () {
  return (
    <Container>
      <Text style={{color: 'black'}}>SignIn</Text>
    </Container>
  );
}

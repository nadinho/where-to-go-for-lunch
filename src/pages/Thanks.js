import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import Title from '../components/Title';
import Button from '../components/Button';
import Div from '../components/Div';
import PageText from '../components/PageText';
import confettiBoy from './confettiBoy.svg';

const ConfettiBoy = styled.img`
  height: 240px;
  margin: 40px;
`;

export default function Start() {
  return (
    <>
      <Title>Vielen Dank!</Title>
      <Div>
        <PageText>
          Cool, dass du uns deine Entdeckung mitgeteilt hast! Wir werden uns das
          anschauen und in den nächsten Tagen hinzufügen.
        </PageText>
        <ConfettiBoy src={confettiBoy} alt="Hungry-Confetti-Boy"></ConfettiBoy>

        <Link to="/">
          <Button type="text">⇢ Startseite</Button>
        </Link>
      </Div>
    </>
  );
}

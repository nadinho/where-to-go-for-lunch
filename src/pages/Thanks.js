import React from 'react';
import './Thanks.css';
import { Link } from 'react-router-dom';
import Title from '../components/Title';
import Button from '../components/Button';
import confettiBoy from './confettiBoy.svg';

export default function Start() {
  return (
    <>
      <Title text="Vielen Dank!"></Title>
      <div className="div">
        <p>
          Cool, dass du uns deine Entdeckung mitgeteilt hast! Wir werden uns das
          anschauen und in den nächsten Tagen hinzufügen.
        </p>
        <img
          src={confettiBoy}
          alt="Hungry-Confetti-Boy"
          className="confettiBoy"
        />

        <Link to="/">
          <Button type="text">⇢ Startseite</Button>
        </Link>
      </div>
    </>
  );
}

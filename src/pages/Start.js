import React from 'react';
import './Start.css';
import { Link } from 'react-router-dom';
import Title from '../components/Title';
import Button from '../components/Button';

export default function Start() {
  return (
    <>
      <Title text="Startseite"></Title>
      <p>Hihi, ich bin die Startseite</p>
      <Link to="/add">
        <Button type="text">⇢ Ort hinzufügen</Button>
      </Link>
    </>
  );
}

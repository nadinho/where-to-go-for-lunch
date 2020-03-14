import React from 'react';
import './Thanks.css';
import { Link } from 'react-router-dom';
import Title from '../components/Title';
import Button from '../components/Button';

export default function Start() {
  return (
    <>
      <Title text="Thank you"></Title>
      <p>Danke für die Blumen...</p>
      <Link to="/">
        <Button type="text">⇢ Startseite</Button>
      </Link>
    </>
  );
}

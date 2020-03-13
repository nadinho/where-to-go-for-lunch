import React from 'react';
import './Thanks.css';
import { Link } from 'react-router-dom';
import Title from '../components/Title';

export default function Start() {
  return (
    <>
      <Title text="Thank you"></Title>
      <p>Danke für die Blumen...</p>
      <p>
        <Link to="/">Zurück zur Startseite</Link>
      </p>
    </>
  );
}

import React from 'react';
import './Start.css';
import { Link } from 'react-router-dom';
import Title from '../components/Title';

export default function Start() {
  return (
    <>
      <Title text="Startseite"></Title>
      <p>Hihi, ich bin die Startseite</p>
      <p>
        <Link to="/add">Add</Link>
      </p>
    </>
  );
}

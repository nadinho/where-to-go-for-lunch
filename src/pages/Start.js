import React from 'react';
import './Start.css';
import { Link } from 'react-router-dom';

export default function Start() {
  return (
    <>
      <p>Hihi, ich bin die Startseite</p>
      <p>
        <Link to="/add">Add</Link>
      </p>
    </>
  );
}

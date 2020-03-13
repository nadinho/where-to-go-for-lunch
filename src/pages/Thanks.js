import React from 'react';
import './Thanks.css';
import { Link } from 'react-router-dom';

export default function Start() {
  return (
    <>
      <p>Danke für die Blumen...</p>
      <p>
        <Link to="/">Zurück zur Startseite</Link>
      </p>
    </>
  );
}

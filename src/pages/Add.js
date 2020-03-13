import React from 'react';
import './Add.css';
import { Link } from 'react-router-dom';
import Title from '../components/Title';

export default function Add() {
  return (
    <div>
      <Title text="Coolen Ort entdeckt?"></Title>
      <p>Das ist die Add-Seite</p>
      <p>
        <Link to="/thanks">Thank you!</Link>
      </p>
    </div>
  );
}

import React from 'react';
import './Add.css';
import { Link } from 'react-router-dom';

export default function Add() {
  return (
    <div>
      <p>Das ist die Add-Seite</p>
      <p>
        <Link to="/thanks">Thank you!</Link>
      </p>
    </div>
  );
}

import React from 'react';
import './Title.css';

export default function Title({ text }) {
  return (
    <div>
      <h2 className="pageTitle">{text}</h2>
    </div>
  );
}

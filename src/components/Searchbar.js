import React from 'react';
import './Searchbar.css';

export default function Searchbar() {
  return (
    <input
      type="search"
      className="searchbar"
      placeholder="Suche nach deinem Ort für's Mittagessen... "
    ></input>
  );
}

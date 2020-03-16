import React from 'react';
import './Cards.css';

export default function Cards(props) {
  return (
    <div className="card">
      <img class="card--img" src={props.url} alt={props.text}></img>
      <div class="card--footer">
        <div class="card--footer__name">{props.name}</div>
        <div class="card--footer__kitchen">{props.kitchen}</div>
        <div class="card--footer__special">{props.special}</div>
        <div class="card--footer__price">{props.price}</div>
      </div>
    </div>
  );
}

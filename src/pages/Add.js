import React from 'react';
import './Add.css';
import { Link } from 'react-router-dom';
import Title from '../components/Title';

export default function Add() {
  return (
    <div>
      <Title text="Coolen Ort entdeckt?"></Title>
      <p className="text">
        Wir freuen uns, wenn du deine neueste Entdeckung mit uns und der
        Community teilst!
      </p>
      <form class="form">
        <p className="formHeadings">Wie heißt das Lokal/Restarant/etc.?</p>
        <input class="restaurantName" placeholder="Name des Ortes"></input>

        <p className="formHeadings">Welche Küche gibt es dort?</p>
        <p className="multipleText">Mehrfachnennungen möglich</p>

        <ul class="multipleChoicesBox">
          <li>
            <input type="checkbox" id="it" className="checkbox"></input>
            <label for="it">Italienisch</label>
          </li>

          <li>
            <input type="checkbox" id="de" className="checkbox"></input>
            <label for="de">Deutsch</label>
          </li>
          <li>
            <input type="checkbox" id="or" className="checkbox"></input>
            <label for="or">Orientalisch</label>
          </li>

          <li>
            <input type="checkbox" id="as" className="checkbox"></input>
            <label for="as">Asiatisch</label>
          </li>

          <li>
            <input type="checkbox" id="am" className="checkbox"></input>
            <label for="am">Amerikanisch</label>
          </li>

          <li>
            <input type="checkbox" id="sp" className="checkbox"></input>
            <label for="sp">Spanisch</label>
          </li>
        </ul>

        <p className="formHeadings">Besonderheiten</p>
        <p className="multipleText">Mehrfachnennungen möglich</p>

        <ul class="multipleChoicesBox">
          <li>
            <input type="checkbox" id="vegan" className="checkbox"></input>
            <label for="vegan">vegan</label>
          </li>
          <li>
            <input type="checkbox" id="veggi" className="checkbox"></input>
            <label for="veggi">vegetarisch</label>
          </li>
          <li>
            <input type="checkbox" id="glu" className="checkbox"></input>
            <label for="glu">glutenfrei</label>
          </li>
          <li>
            <input type="checkbox" id="lact" className="checkbox"></input>
            <label for="lact">lactosefrei</label>
          </li>
          <li>
            <input type="checkbox" id="fru" className="checkbox"></input>
            <label for="fru">frutarisch</label>
          </li>
          <li>
            <input type="checkbox" id="kl" className="checkbox"></input>
            <label for="kl">kalorienarm</label>
          </li>
        </ul>

        <p className="formHeadings">Wie teuer ist es dort?</p>
        <ul class="multipleChoicesBox">
          <li>
            <input
              type="radio"
              id="billig"
              className="checkbox"
              name="Preis"
            ></input>
            <label for="billig">
              <i class="fas fa-euro-sign"></i>
            </label>
          </li>
          <li>
            <input
              type="radio"
              id="mittel"
              className="checkbox"
              name="Preis"
            ></input>
            <label for="mittel">
              <i class="fas fa-euro-sign"></i>
              <i class="fas fa-euro-sign"></i>
            </label>
          </li>
          <li>
            <input
              type="radio"
              id="teuer"
              className="checkbox"
              name="Preis"
            ></input>
            <label for="teuer">
              <i class="fas fa-euro-sign"></i>
              <i class="fas fa-euro-sign"></i>
              <i class="fas fa-euro-sign"></i>
            </label>
          </li>
        </ul>
      </form>
      <p>
        <Link to="/thanks">Thank you!</Link>
      </p>
    </div>
  );
}
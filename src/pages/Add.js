import React from 'react';
import './Add.css';
import { Link } from 'react-router-dom';
import Title from '../components/Title';
import Button from '../components/Button';

export default function Add() {
  return (
    <div>
      <Title text="Coolen Ort entdeckt?"></Title>
      <p className="text">
        Wir freuen uns, wenn du deine neueste Entdeckung mit uns und der
        Community teilst!
      </p>
      <form className="form">
        <p className="formHeadings">Wie heißt das Lokal/Restarant/etc.?</p>
        <input className="restaurantName" placeholder="Name des Ortes"></input>

        <p className="formHeadings">Welche Küche gibt es dort?</p>
        <p className="multipleText">Mehrfachnennungen möglich</p>

        <ul className="multipleChoicesBox">
          <li>
            <input
              type="checkbox"
              id="it"
              className="checkbox"
              name="kitchen"
            ></input>
            <label for="it">Italienisch</label>
          </li>

          <li>
            <input
              type="checkbox"
              id="de"
              className="checkbox"
              name="kitchen"
            ></input>
            <label for="de">Deutsch</label>
          </li>
          <li>
            <input
              type="checkbox"
              id="or"
              className="checkbox"
              name="kitchen"
            ></input>
            <label for="or">Orientalisch</label>
          </li>

          <li>
            <input
              type="checkbox"
              id="as"
              className="checkbox"
              name="kitchen"
            ></input>
            <label for="as">Asiatisch</label>
          </li>

          <li>
            <input
              type="checkbox"
              id="am"
              className="checkbox"
              name="kitchen"
            ></input>
            <label for="am">Amerikanisch</label>
          </li>

          <li>
            <input
              type="checkbox"
              id="sp"
              className="checkbox"
              name="kitchen"
            ></input>
            <label for="sp">Spanisch</label>
          </li>
        </ul>

        <p className="formHeadings">Besonderheiten</p>
        <p className="multipleText">Mehrfachnennungen möglich</p>

        <ul className="multipleChoicesBox">
          <li>
            <input
              type="checkbox"
              id="vegan"
              className="checkbox"
              name="special"
            ></input>
            <label for="vegan">vegan</label>
          </li>
          <li>
            <input
              type="checkbox"
              id="veggi"
              className="checkbox"
              name="special"
            ></input>
            <label for="veggi">vegetarisch</label>
          </li>
          <li>
            <input
              type="checkbox"
              id="glu"
              className="checkbox"
              name="special"
            ></input>
            <label for="glu">glutenfrei</label>
          </li>
          <li>
            <input
              type="checkbox"
              id="lact"
              className="checkbox"
              name="special"
            ></input>
            <label for="lact">lactosefrei</label>
          </li>
          <li>
            <input
              type="checkbox"
              id="fru"
              className="checkbox"
              name="special"
            ></input>
            <label for="fru">frutarisch</label>
          </li>
          <li>
            <input
              type="checkbox"
              id="kl"
              className="checkbox"
              name="special"
            ></input>
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
              <i className="fas fa-euro-sign"></i>
              <i clasNames="fas fa-euro-sign"></i>
              <i className="fas fa-euro-sign"></i>
            </label>
          </li>
        </ul>
        <Link to="/thanks">
          <Button type="submit" link to="/thanks">
            ⇢ Ab geht's!
          </Button>
        </Link>
      </form>
    </div>
  );
}

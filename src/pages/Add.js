import React from 'react';
import './Add.css';
import { Link } from 'react-router-dom';
import Title from '../components/Title';
import Button from '../components/Button';

export default function Add() {
  const [fieldRestaurant, setFieldRestaurant] = React.useState('');
  const [fieldKitchen, setFieldKitchen] = React.useState('');
  const [fieldSpecial, setFieldSpecial] = React.useState('');
  const [fieldMoney, setFieldMoney] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();

    const formular = {
      fieldRestaurant: fieldRestaurant,
      fieldKitchen: fieldKitchen,
      fieldSpecial: fieldSpecial,
      fieldMoney: fieldMoney
    };

    alert(JSON.stringify(formular));
  }

  return (
    <div>
      <Title text="Coolen Ort entdeckt?"></Title>
      <p className="text">
        Wir freuen uns, wenn du deine neueste Entdeckung mit uns und der
        Community teilst!
      </p>
      <form className="form" onSubmit={handleSubmit}>
        <p className="formHeadings">Wie heißt das Lokal/Restarant/etc.?</p>
        <input
          className="restaurantName"
          placeholder="Name des Ortes"
          value={fieldRestaurant}
          onChange={event => {
            setFieldRestaurant(event.target.value);
          }}
        ></input>

        <p className="formHeadings">Welche Küche gibt es dort?</p>
        <p className="multipleText">Mehrfachnennungen möglich</p>

        <ul className="multipleChoicesBox">
          <li>
            <input
              type="checkbox"
              id="it"
              className="checkbox"
              name="kitchen"
              value={fieldKitchen}
              onChange={event => {
                setFieldKitchen(event.target.value);
              }}
            ></input>
            <label for="it">Italienisch</label>
          </li>

          <li>
            <input
              type="checkbox"
              id="de"
              className="checkbox"
              name="kitchen"
              value="{fieldKitchen}"
              onChange={event => {
                setFieldKitchen(event.target.value);
              }}
            ></input>
            <label for="de">Deutsch</label>
          </li>
          <li>
            <input
              type="checkbox"
              id="or"
              className="checkbox"
              name="kitchen"
              value={fieldKitchen}
              onChange={event => {
                setFieldKitchen(event.target.value);
              }}
            ></input>
            <label for="or">Orientalisch</label>
          </li>

          <li>
            <input
              type="checkbox"
              id="as"
              className="checkbox"
              name="kitchen"
              value={fieldKitchen}
              onChange={event => {
                setFieldKitchen(event.target.value);
              }}
            ></input>
            <label for="as">Asiatisch</label>
          </li>

          <li>
            <input
              type="checkbox"
              id="am"
              className="checkbox"
              name="kitchen"
              value={fieldKitchen}
              onChange={event => {
                setFieldKitchen(event.target.value);
              }}
            ></input>
            <label for="am">Amerikanisch</label>
          </li>

          <li>
            <input
              type="checkbox"
              id="sp"
              className="checkbox"
              name="kitchen"
              value={fieldKitchen}
              onChange={event => {
                setFieldKitchen(event.target.value);
              }}
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
              value={fieldSpecial}
              onChange={event => {
                setFieldSpecial(event.target.value);
              }}
            ></input>
            <label for="vegan">vegan</label>
          </li>
          <li>
            <input
              type="checkbox"
              id="veggi"
              className="checkbox"
              name="special"
              value={fieldSpecial}
              onChange={event => {
                setFieldSpecial(event.target.value);
              }}
            ></input>
            <label for="veggi">vegetarisch</label>
          </li>
          <li>
            <input
              type="checkbox"
              id="glu"
              className="checkbox"
              name="special"
              value={fieldSpecial}
              onChange={event => {
                setFieldSpecial(event.target.value);
              }}
            ></input>
            <label for="glu">glutenfrei</label>
          </li>
          <li>
            <input
              type="checkbox"
              id="lact"
              className="checkbox"
              name="special"
              value={fieldSpecial}
              onChange={event => {
                setFieldSpecial(event.target.value);
              }}
            ></input>
            <label for="lact">lactosefrei</label>
          </li>
          <li>
            <input
              type="checkbox"
              id="fru"
              className="checkbox"
              name="special"
              value={fieldSpecial}
              onChange={event => {
                setFieldSpecial(event.target.value);
              }}
            ></input>
            <label for="fru">frutarisch</label>
          </li>
          <li>
            <input
              type="checkbox"
              id="kl"
              className="checkbox"
              name="special"
              value={fieldSpecial}
              onChange={event => {
                setFieldSpecial(event.target.value);
              }}
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
              value={fieldMoney}
              onChange={event => {
                setFieldMoney(event.target.value);
              }}
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
              value={fieldMoney}
              onChange={event => {
                setFieldMoney(event.target.value);
              }}
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
              value={fieldMoney}
              onChange={event => {
                setFieldMoney(event.target.value);
              }}
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

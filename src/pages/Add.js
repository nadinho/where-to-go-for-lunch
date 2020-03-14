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
    console.log(handleSubmit(event));

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
              className="checkbox"
              name="italienisch"
              value={fieldKitchen}
              onChange={event => {
                setFieldKitchen(event.target.value);
              }}
            ></input>
            <label>Italienisch</label>
          </li>

          <li>
            <input
              type="checkbox"
              className="checkbox"
              name="deutsch"
              value="{fieldKitchen}"
              onChange={event => {
                setFieldKitchen(event.target.value);
              }}
            ></input>
            <label>Deutsch</label>
          </li>
          <li>
            <input
              type="checkbox"
              className="checkbox"
              name="orientalisch"
              value={fieldKitchen}
              onChange={event => {
                setFieldKitchen(event.target.value);
              }}
            ></input>
            <label>Orientalisch</label>
          </li>

          <li>
            <input
              type="checkbox"
              className="checkbox"
              name="asiatisch"
              value={fieldKitchen}
              onChange={event => {
                setFieldKitchen(event.target.value);
              }}
            ></input>
            <label>Asiatisch</label>
          </li>

          <li>
            <input
              type="checkbox"
              className="checkbox"
              name="amerikanisch"
              value={fieldKitchen}
              onChange={event => {
                setFieldKitchen(event.target.value);
              }}
            ></input>
            <label>Amerikanisch</label>
          </li>

          <li>
            <input
              type="checkbox"
              className="checkbox"
              name="spanisch"
              value={fieldKitchen}
              onChange={event => {
                setFieldKitchen(event.target.value);
              }}
            ></input>
            <label>Spanisch</label>
          </li>
        </ul>

        <p className="formHeadings">Besonderheiten</p>
        <p className="multipleText">Mehrfachnennungen möglich</p>

        <ul className="multipleChoicesBox">
          <li>
            <input
              type="checkbox"
              className="checkbox"
              name="vegan"
              value={fieldSpecial}
              onChange={event => {
                setFieldSpecial(event.target.value);
              }}
            ></input>
            <label>vegan</label>
          </li>
          <li>
            <input
              type="checkbox"
              className="checkbox"
              name="vegetarisch"
              value={fieldSpecial}
              onChange={event => {
                setFieldSpecial(event.target.value);
              }}
            ></input>
            <label>vegetarisch</label>
          </li>
          <li>
            <input
              type="checkbox"
              className="checkbox"
              name="glutenfrei"
              value={fieldSpecial}
              onChange={event => {
                setFieldSpecial(event.target.value);
              }}
            ></input>
            <label>glutenfrei</label>
          </li>
          <li>
            <input
              type="checkbox"
              className="checkbox"
              name="lactosefrei"
              value={fieldSpecial}
              onChange={event => {
                setFieldSpecial(event.target.value);
              }}
            ></input>
            <label>lactosefrei</label>
          </li>
          <li>
            <input
              type="checkbox"
              className="checkbox"
              name="frutarisch"
              value={fieldSpecial}
              onChange={event => {
                setFieldSpecial(event.target.value);
              }}
            ></input>
            <label>frutarisch</label>
          </li>
          <li>
            <input
              type="checkbox"
              className="checkbox"
              name="kalorienarm"
              value={fieldSpecial}
              onChange={event => {
                setFieldSpecial(event.target.value);
              }}
            ></input>
            <label>kalorienarm</label>
          </li>
        </ul>

        <p className="formHeadings">Wie teuer ist es dort?</p>
        <ul class="multipleChoicesBox">
          <li>
            <input
              type="radio"
              className="checkbox"
              name="billig"
              value={fieldMoney}
              onChange={event => {
                setFieldMoney(event.target.value);
              }}
            ></input>
            <label>
              <i className="fas fa-euro-sign"></i>
            </label>
          </li>
          <li>
            <input
              type="radio"
              className="checkbox"
              name="mittel"
              value={fieldMoney}
              onChange={event => {
                setFieldMoney(event.target.value);
              }}
            ></input>
            <label>
              <i class="fas fa-euro-sign"></i>
              <i class="fas fa-euro-sign"></i>
            </label>
          </li>
          <li>
            <input
              type="radio"
              className="checkbox"
              name="teuer"
              value={fieldMoney}
              onChange={event => {
                setFieldMoney(event.target.value);
              }}
            ></input>
            <label>
              <i className="fas fa-euro-sign"></i>
              <i classNames="fas fa-euro-sign"></i>
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

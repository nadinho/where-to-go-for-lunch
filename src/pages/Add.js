import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from '@emotion/styled';

import Title from '../components/Title';
import Button from '../components/Button';
import PageText from '../components/PageText';
import Spinner from '../components/Loading';
import Div from '../components/Div';
import Form from '../components/Form';
import Heading from '../components/Headings';
import SmallText from '../components/SmallText';

import { postFormular } from '../Api/Formular';

export default function Add() {
  const [fieldRestaurant, setFieldRestaurant] = React.useState('');
  const [fieldKitchen, setFieldKitchen] = React.useState('');
  const [fieldSpecial, setFieldSpecial] = React.useState('');
  const [fieldMoney, setFieldMoney] = React.useState('');
  const history = useHistory();
  const [isLoading, setIsLoading] = React.useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    setIsLoading(true);

    const formular = {
      fieldRestaurant: fieldRestaurant,
      fieldKitchen: fieldKitchen,
      fieldSpecial: fieldSpecial,
      fieldMoney: fieldMoney
    };

    await postFormular(formular);
    history.push('/Thanks');
  }

  if (isLoading) {
    return (
      <Div>
        <Spinner></Spinner>
      </Div>
    );
  }

  const InputText = styled.input`
    height: 50px;
    width: 220px;
    outline: none;
    border: none;
    border-radius: 40px;
    box-shadow: 0px 3px 6px #ddd;
    font-size: 0.9rem;
    text-align: center;
  `;

  const MultipleChoicesBox = styled.ul`
    margin-top: -5px;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 80%;
    color: ${props => props.theme.colors.textPrimary};
  `;

  const ChoicesItem = styled.li`
    padding: 10px;
  `;

  const MultipleChoices = styled.input`
    margin: 15px;
  `;

  return (
    <>
      <Title>Coolen Ort entdeckt?</Title>
      <PageText>
        Wir freuen uns, wenn du deine neueste Entdeckung mit uns und der
        Community teilst!
      </PageText>
      <Form onSubmit={handleSubmit}>
        <Heading>Wie heißt das Lokal/Restarant/etc.?</Heading>
        <InputText
          placeholder="Name des Ortes"
          value={fieldRestaurant}
          onChange={event => {
            setFieldRestaurant(event.target.value);
          }}
        ></InputText>

        <Heading>Welche Küche gibt es dort?</Heading>
        <SmallText>Mehrfachnennungen möglich</SmallText>

        <MultipleChoicesBox>
          <ChoicesItem>
            <MultipleChoices
              type="checkbox"
              className="checkbox"
              name="italienisch"
              value={fieldKitchen}
              onChange={event => {
                setFieldKitchen(event.target.name);
              }}
            ></MultipleChoices>
            <label>Italienisch</label>
          </ChoicesItem>

          <ChoicesItem>
            <MultipleChoices
              type="checkbox"
              className="checkbox"
              name="deutsch"
              value={fieldKitchen}
              onChange={event => {
                setFieldKitchen(event.target.name);
              }}
            ></MultipleChoices>
            <label>Deutsch</label>
          </ChoicesItem>
          <ChoicesItem>
            <MultipleChoices
              type="checkbox"
              className="checkbox"
              name="orientalisch"
              value={fieldKitchen}
              onChange={event => {
                setFieldKitchen(event.target.name);
              }}
            ></MultipleChoices>
            <label>Orientalisch</label>
          </ChoicesItem>

          <ChoicesItem>
            <MultipleChoices
              type="checkbox"
              className="checkbox"
              name="asiatisch"
              value={fieldKitchen}
              onChange={event => {
                setFieldKitchen(event.target.name);
              }}
            ></MultipleChoices>
            <label>Asiatisch</label>
          </ChoicesItem>

          <ChoicesItem>
            <MultipleChoices
              type="checkbox"
              className="checkbox"
              name="amerikanisch"
              value={fieldKitchen}
              onChange={event => {
                setFieldKitchen(event.target.name);
              }}
            ></MultipleChoices>
            <label>Amerikanisch</label>
          </ChoicesItem>

          <ChoicesItem>
            <MultipleChoices
              type="checkbox"
              className="checkbox"
              name="spanisch"
              value={fieldKitchen}
              onChange={event => {
                setFieldKitchen(event.target.name);
              }}
            ></MultipleChoices>
            <label>Spanisch</label>
          </ChoicesItem>
        </MultipleChoicesBox>

        <Heading>Besonderheiten</Heading>
        <SmallText>Mehrfachnennungen möglich</SmallText>

        <MultipleChoicesBox>
          <ChoicesItem>
            <MultipleChoices
              type="checkbox"
              className="checkbox"
              name="vegan"
              value={fieldSpecial}
              onChange={event => {
                setFieldSpecial(event.target.name);
              }}
            ></MultipleChoices>
            <label>vegan</label>
          </ChoicesItem>
          <ChoicesItem>
            <MultipleChoices
              type="checkbox"
              className="checkbox"
              name="vegetarisch"
              value={fieldSpecial}
              onChange={event => {
                setFieldSpecial(event.target.name);
              }}
            ></MultipleChoices>
            <label>vegetarisch</label>
          </ChoicesItem>
          <ChoicesItem>
            <MultipleChoices
              type="checkbox"
              className="checkbox"
              name="glutenfrei"
              value={fieldSpecial}
              onChange={event => {
                setFieldSpecial(event.target.name);
              }}
            ></MultipleChoices>
            <label>glutenfrei</label>
          </ChoicesItem>
          <ChoicesItem>
            <MultipleChoices
              type="checkbox"
              className="checkbox"
              name="lactosefrei"
              value={fieldSpecial}
              onChange={event => {
                setFieldSpecial(event.target.name);
              }}
            ></MultipleChoices>
            <label>lactosefrei</label>
          </ChoicesItem>
          <ChoicesItem>
            <MultipleChoices
              type="checkbox"
              className="checkbox"
              name="frutarisch"
              value={fieldSpecial}
              onChange={event => {
                setFieldSpecial(event.target.name);
              }}
            ></MultipleChoices>
            <label>frutarisch</label>
          </ChoicesItem>
          <ChoicesItem>
            <MultipleChoices
              type="checkbox"
              className="checkbox"
              name="kalorienarm"
              value={fieldSpecial}
              onChange={event => {
                setFieldSpecial(event.target.name);
              }}
            ></MultipleChoices>
            <label>kalorienarm</label>
          </ChoicesItem>
        </MultipleChoicesBox>

        <Heading>Wie teuer ist es dort?</Heading>
        <MultipleChoicesBox>
          <ChoicesItem>
            <MultipleChoices
              type="radio"
              className="checkbox"
              name="billig"
              value={fieldMoney}
              onChange={event => {
                setFieldMoney(event.target.name);
              }}
            ></MultipleChoices>
            <label>
              <i className="fas fa-euro-sign"></i>
            </label>
          </ChoicesItem>
          <ChoicesItem>
            <MultipleChoices
              type="radio"
              className="checkbox"
              name="mittel"
              value={fieldMoney}
              onChange={event => {
                setFieldMoney(event.target.name);
              }}
            ></MultipleChoices>
            <label>
              <i className="fas fa-euro-sign"></i>
              <i className="fas fa-euro-sign"></i>
            </label>
          </ChoicesItem>
          <ChoicesItem>
            <MultipleChoices
              type="radio"
              className="checkbox"
              name="teuer"
              value={fieldMoney}
              onChange={event => {
                setFieldMoney(event.target.name);
              }}
            ></MultipleChoices>
            <label>
              <i className="fas fa-euro-sign"></i>
              <i className="fas fa-euro-sign"></i>
              <i className="fas fa-euro-sign"></i>
            </label>
          </ChoicesItem>
        </MultipleChoicesBox>

        <Button disabled={isLoading}>⇢ Ab geht's!</Button>
      </Form>
    </>
  );
}

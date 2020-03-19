import React from 'react';
import { Link } from 'react-router-dom';
import Title from '../components/Title';
import Button from '../components/Button';
import Cards from '../components/Cards';
import Div from '../components/Div';

export default function Start() {
  return (
    <>
      <Title>Neue Orte</Title>
      <Div>
        <Cards
          url="https://scontent.fdtm2-1.fna.fbcdn.net/v/t1.0-9/67969911_705715566520487_2402551426313093120_n.jpg?_nc_cat=101&_nc_sid=dd9801&_nc_ohc=lKZCg73UPU0AX8KKTV1&_nc_ht=scontent.fdtm2-1.fna&oh=e9209a6d2d9d14b8ace1d702a1ee318f&oe=5E941B7F"
          name="Olafs"
          kitchen="amerikanisch"
          special="vegetarisch, vegan"
          price="€€"
        ></Cards>
        <Cards
          url="https://www.coolibri.de/wp-content/uploads/2018/11/12_11_18_K%C3%BCchen-Wirtschaft-Bismarck-1.jpg"
          name="Café Bismarck"
          kitchen="deutsch, italienisch"
          special="vegetarisch, vegan, glutenfrei"
          price="€€"
        ></Cards>
        <Cards
          url="https://scontent.fdtm2-1.fna.fbcdn.net/v/t1.0-9/22046526_1529392237140519_8682507409231923863_n.jpg?_nc_cat=101&_nc_sid=dd9801&_nc_ohc=VaQqQ_uPhZ4AX9ErwW6&_nc_ht=scontent.fdtm2-1.fna&oh=501e1b4bdcda3e674fcd8e876370c779&oe=5E96BA41"
          name="Beim Ägypter"
          kitchen="orientalisch"
          special="vegetarisch, vegan"
          price="€"
        ></Cards>
        <Cards
          url="http://www.dortmund-ahoi.de/fileadmin/_processed_/csm_Mit_Schmackes_1_71e3eb10c8.jpg"
          name="Mit Schmackes"
          kitchen="deutsch"
          special="vegetarisch"
          price="€€"
        ></Cards>
        <Button type="text">⇢ Mehr Orte</Button>
        <Link to="/add">
          <Button type="text">⇢ Ort hinzufügen</Button>
        </Link>
      </Div>
    </>
  );
}

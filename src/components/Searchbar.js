import React from 'react';
import styled from '@emotion/styled';

const Searchbar = styled.input`
  width: 100%;
  height: 10vh;
  border: none;
  text-align: center;
  font-size: 1.1rem;
  font-family: 'Rubik', sans-serif;
  font-weight: 300i;
  background-color: #f9f4e8;
  &:placeholdercolor {
    color: #bebdbd;
  }
`;

export default function Search() {
  return (
    <Searchbar
      type="search"
      placeholder="Suche nach deinem Ort für's Mittagessen... "
    ></Searchbar>
  );
}

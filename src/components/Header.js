import React from 'react';
import styled from '@emotion/styled';

const Header = styled.header`
  padding: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  text-transform: uppercase;
  font-weight: 900;
  color: ${props => props.theme.colors.heading};
`;

const Toggle = styled.button`
  background: none;
  color: ${props => props.theme.colors.primary};
  border: none;
  border-radius: 40px;
  cursor: pointer;
  outline: none;
  width: 50px;
  height: 50px;
  font-size: 1.8rem;
  position: relative;
  top: -50px;
  right: -20px;
`;

export default function AppHeader({ onToggleThemeClick }) {
  return (
    <Header>
      <Title>
        Find the best places <br></br>for your lunch
      </Title>
      <Toggle onClick={onToggleThemeClick}>
        <i class="far fa-lightbulb"></i>
      </Toggle>
    </Header>
  );
}

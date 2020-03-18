import React from 'react';
import styled from '@emotion/styled';

const Header = styled.header`
  padding: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  // justify-content: flex-end;
`;

const Title = styled.h1`
  text-transform: uppercase;
  font-weight: 900;
  color: ${props => props.theme.colors.heading};
`;

const Toggle = styled.input`
  display: none;
`;

const ToggleLabel = styled.label`
  background-color: ${props => props.theme.colors.primary};
  display: inline-block;
  border-radius: 50px;
  cursor: pointer;

  position: relative;

  width: 50px;
  height: 20px;
`;

export default function AppHeader({ onToggleClick }) {
  return (
    <Header>
      <ToggleLabel>
        <Toggle type="checkbox" onClick={onToggleClick} />
      </ToggleLabel>
      <Title>
        Find the best places <br></br>for your lunch
      </Title>
    </Header>
  );
}

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

const ToggleCheckbox = styled.input`
  position: relative;
  display: inline-block;
`;

const Toggle = styled.label`
  background-color: ${props => props.theme.colors.primary};
  display: inline-block;
  border-radius: 50px;
  cursor: pointer;
  position: relative;
  width: 50px;
  height: 20px;
  transition: all 0.4s;
`;

const Slider = styled.span`
  background-color: #bc2612;
  border: 1px solid #aaa;
  border-radius: 5px;
  transition: all 0.4s;
  &:before {
    position: absolute;
    content: '';
    width: 18px;
    height: 14px;
    left: 2px;
    top: 2px;
    background-color: #eee;
    border-radius: 5px;
    transition: all 0.4s;
    &:checked {
      transform: translateX(40px);
    }
  }
`;

export default function AppHeader({ onToggleClick }) {
  return (
    <Header>
      <Toggle>
        <ToggleCheckbox type="checkbox" onClick={onToggleClick} />
        <Slider></Slider>
      </Toggle>

      <Title>
        Find the best places <br></br>for your lunch
      </Title>
    </Header>
  );
}

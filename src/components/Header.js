import React from 'react';
import styled from '@emotion/styled';

const Header = styled.header`
  padding: 50px;
  display: flex;
  justify-content: flex-end;
`;

const Title = styled.h1`
  text-transform: uppercase;
  font-weight: 900;
  color: ${props => props.theme.colors.secondary};
`;

export default function AppHeader() {
  return (
    <Header>
      <Title>
        Find the best places <br></br>for your lunch
      </Title>
    </Header>
  );
}

import React from 'react';
import styled from '@emotion/styled';

const Card = styled.div`
  margin: 30px;
  border-radius: 15px;
  box-shadow: 0px 3px 10px grey;
  background: ${props => props.theme.colors.card};
  display: flex;
  flex-direction: column;

  &:hover {
    box-shadow: 2px 2px 20px grey;
  }
`;

const CardImg = styled.img`
  border-radius: 15px 15px 0 0;
  height: 200px;
  width: 300px;
`;

const CardFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 15px;
  color: ${props => props.theme.colors.heading};
`;

const FooterName = styled.h3`
  font-weight: 900;
  font-size: 1.3rem;
  margin-bottom: 8px;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

const FooterText = styled.p`
  font-size: 0.9rem;
  line-height: 5px;
`;

export default function Cards(props) {
  return (
    <Card>
      <CardImg src={props.url} alt={props.text}></CardImg>
      <CardFooter>
        <FooterName>{props.name}</FooterName>
        <FooterText>{props.kitchen}</FooterText>
        <FooterText>{props.special}</FooterText>
        <FooterText>{props.price}</FooterText>
      </CardFooter>
    </Card>
  );
}

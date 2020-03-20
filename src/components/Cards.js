import React from 'react';
import styled from '@emotion/styled';

const Card = styled.div`
  width: 100%;
  margin: 20px;
  background: none;
  display: flex;
  flex-direction: column;
`;

const CardImg = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
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
  background: white;
  border-radius: 20px;
  padding: 15px;
  font-size: 1.3rem;
  margin-bottom: 8px;
  letter-spacing: 2px;
  text-transform: uppercase;
  position: relative;
  top: -55px;
  color: ${props => props.theme.colors.primary};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: -50px;
  width: 100%;
  border: 1px dashed ${props => props.theme.colors.primary};
`;

const Kitchen = styled.p`
  font-size: 0.9rem;
  line-height: 0.2em;
  text-transform: uppercase;
`;
const Special = styled.p`
  font-size: 0.9rem;
  text-transform: uppercase;
`;
const Price = styled.p`
  font-size: 1rem;
  text-transform: uppercase;
`;

export default function Cards(props) {
  return (
    <Card>
      <CardImg src={props.url} alt={props.text}></CardImg>
      <CardFooter>
        <FooterName>{props.name}</FooterName>
        <Wrapper>
          <Price>{props.price}</Price>
          <Kitchen>{props.kitchen}</Kitchen>
          <Special>{props.special}</Special>
        </Wrapper>
      </CardFooter>
    </Card>
  );
}

import styled from '@emotion/styled';

const Button = styled.button`
  padding: 10px;
  background: ${props => props.theme.colors.primary};

  height: 50px;
  width: 40%;
  border: none;
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;
  position: fixed;
  bottom: 20px;
  box-shadow: 2px 2px 5px ${props => props.theme.colors.shadow};
  right: 0px;
  font-size: 1rem;
  cursor: pointer;
  font-family: Rubik;
  font-weight: 500;
  color: ${props => props.theme.colors.heading};
`;
export default Button;

import styled from '@emotion/styled';

const Button = styled.button`
  padding: 10px;
  background: ${props => props.theme.colors.primary};

  height: 50px;
  width: 40%;
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;
  position: fixed;
  bottom: 20px;
  right: 0px;
  font-size: 1rem;
  cursor: pointer;
  font-family: Rubik;
  font-weight: 500;
  color: ${props => props.theme.colors.textPrimary};
`;
export default Button;

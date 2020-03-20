import styled from '@emotion/styled';

const Button = styled.button`
  padding: 10px;
  background: none;
  margin-top: 40px;
  border: 1px solid ${props => props.theme.colors.primary};
  height: 50px;
  width: 180px;
  font-size: 1rem;
  cursor: pointer;
  font-family: Rubik;
  font-weight: 500;
  color: ${props => props.theme.colors.textPrimary};
`;
export default Button;

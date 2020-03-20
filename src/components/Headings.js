import styled from '@emotion/styled';
const Heading = styled.p`
  font-weight: 500;
  margin-top: 40px;
  color: ${props => props.theme.colors.primary};
  &::placeholder {
    color: #bebdbd;
  }
`;

export default Heading;

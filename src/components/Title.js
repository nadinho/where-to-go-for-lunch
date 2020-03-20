import styled from '@emotion/styled';

const PageTitle = styled.h2`
  font-size: 1.5rem;
  color: ${props => props.theme.colors.heading};
  font-weight: 900;
  &::after {
    content: '';
    margin-top: 7px;
    height: 5px;
    display: block;
    width: 80px;
    background: ${props => props.theme.colors.primary};
    border-right: 1px white;
  }
`;

export default PageTitle;

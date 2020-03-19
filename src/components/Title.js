import styled from '@emotion/styled';

const PageTitle = styled.h2(
  `
  font-size: 1.5rem;
  color: ${props => props.theme.colors.primary};
  font-weight: 900;
  &::after {
    content: '';
    margin-top: 7px;
    height: 5px;
    display: block;
    width: 80px;
    background: #dcb042;
    border-right: 1px white;
  }
`,
  props => ({ ...props })
);

export default PageTitle;

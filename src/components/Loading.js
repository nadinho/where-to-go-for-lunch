import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  border-top: 2px solid ${props => props.theme.colors.primary};
  border-right: 2px solid ${props => props.theme.colors.primary};
  border-bottom: 2px solid ${props => props.theme.colors.primary};
  border-left: 4px solid ${props => props.theme.colors.secondary};
  background: transparent;
  width: 64px;
  height: 64px;
  border-radius: 50%;
`;

export default Spinner;

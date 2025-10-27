import styled from 'styled-components';
import { primaryColor } from '../../config/colors';

export const Nav = styled.nav`
  background: ${primaryColor};
  padding: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;

  a {
    color: #fff;
    margin: 0 0.625rem 0 0;
    font-weight: bold;
  }
`;

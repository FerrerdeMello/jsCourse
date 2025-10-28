import styled from 'styled-components';

export const Title = styled.h1`
  color: ${(props) => (props.$isRed ? 'red' : 'blue')};
  text-align: center;

  small {
    font-size: 1rem;
    margin-left: 0.9375rem;
    color: #999;
  }
`;

export const Paragrafo = styled.p`
  text-align: center;
  font-size: 1rem;
`;

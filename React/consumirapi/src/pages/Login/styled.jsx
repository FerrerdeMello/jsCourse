import styled from 'styled-components';

export const Title = styled.h1`
  color: ${(props) => (props.$isRed ? 'red' : 'blue')};

  small {
    font-size: 1rem;
    margin-left: 0.9375rem;
    color: #999;
  }
`;

export const Paragrafo = styled.p`
  font-size: 1rem;
`;

import styled from 'styled-components';

export const PlantContainer = styled.div`
  margin-top: 1.8rem;
  div {
    display: flex;
    /* text-align: center; // horizontal */
    align-items: center; // vertical
    justify-content: space-between;
    padding: 0.32rem 0;
  }
  div + div {
    border-top: 1px solid #eee;
  }
`;

export const PlantPhoto = styled.div`
  img {
    width: 2.25rem;
    height: 2.25rem;
    border-radius: 50%;
  }
`;

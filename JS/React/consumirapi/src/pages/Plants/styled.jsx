import styled from 'styled-components';

export const PlantRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between; /* <-- Place the icons on the right. */
  padding: 10px 0;
  border-bottom: 1px solid #ddd;

  > strong {
    margin-left: 10px;
    flex: 1; /* <-- push the icons to the right */
  }

  a,
  svg {
    margin-left: 8px;
    cursor: pointer;
  }
`;

export const PlantContainer = styled.div`
  ul {
    list-style: none;
    padding: 0;
  }
`;

export const PlantPhoto = styled.div`
  width: 50px;
  height: 50px;

  img,
  svg {
    width: 50px;
    height: 50px;
  }
`;

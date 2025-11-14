import { FaEdit } from 'react-icons/fa';
import styled from 'styled-components';
import * as colors from '../../config/colors';

export const PlantPhotoWrapper = styled.div`
  position: relative;
  width: 8.5rem;
  height: 8.5rem;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
  margin: 1rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const EditIcon = styled(FaEdit)`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  position: absolute;
  bottom: 0;
  color: white;
  background-color: ${colors.primaryColor};
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 50%;
  padding: 0.5rem;
  z-index: 10;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

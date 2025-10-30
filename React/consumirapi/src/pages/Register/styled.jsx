import styled from 'styled-components';
import * as colors from '../../config/colors';

export const FormRegister = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 1.25rem;

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 1.25rem;
  }

  input {
    height: 2.5rem;
    font-size: 1.125rem;
    border: 1px solid #ddd;
    padding: 0 0.625rem;
    border-radius: 4px;
    margin-top: 0.3125rem;

    &:focus {
      border: 1px solid ${colors.primaryColor};
    }
  }
`;

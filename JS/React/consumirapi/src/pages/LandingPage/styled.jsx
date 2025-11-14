import styled from 'styled-components';

export const LandingContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5f7f2;
  padding: 20px;
`;

export const Hero = styled.div`
  text-align: center;
  max-width: 420px;

  h1 {
    margin-top: 20px;
    font-size: 2rem;
    color: #2e5e2a;
  }

  p {
    margin-top: 12px;
    font-size: 1.1rem;
    color: #4a4a4a;
    line-height: 1.4;
  }
`;

export const CTAGroup = styled.div`
  margin-top: 32px;
  display: flex;
  gap: 16px;
  justify-content: center;
`;

export const ButtonPrimary = styled.button`
  background: #4caf50;
  border: none;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: #45a049;
  }
`;

export const ButtonSecondary = styled.button`
  background: white;
  border: 2px solid #4caf50;
  color: #4caf50;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: #e8f5e9;
  }
`;

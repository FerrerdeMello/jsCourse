import { FaLeaf } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import {
  ButtonPrimary,
  ButtonSecondary,
  CTAGroup,
  Hero,
  LandingContainer,
} from './styled';

export default function LandingPage() {
  return (
    <LandingContainer>
      <Hero>
        <FaLeaf size={80} color="#4CAF50" />
        <h1>Welcome to Plants App</h1>
        <p>
          Organize, monitor and care for your plants in a simple and intuitive
          way. Upload photos, track species and manage your personal collection.
        </p>

        <CTAGroup>
          <Link to="/user-register">
            <ButtonPrimary>Create Account</ButtonPrimary>
          </Link>

          <Link to="/login">
            <ButtonSecondary>Login</ButtonSecondary>
          </Link>
        </CTAGroup>
      </Hero>
    </LandingContainer>
  );
}

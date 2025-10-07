import { Container } from '../../styles/Container';
import { Paragrafo, Title } from './styled';

export default function Login() {
  return (
    <Container>
      <Title isRed={true}>
        Login
        <small> ::: </small>
      </Title>
      <Paragrafo>Esta será a minha tela de login...</Paragrafo>
      <a href="">Next</a>
    </Container>
  );
}

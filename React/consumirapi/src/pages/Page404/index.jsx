import { Container } from '../../styles/Container';
import { Paragrafo, Title } from './styled';

export default function Page404() {
  return (
    <Container>
      <Title $isRed={false}>Page not Found</Title>
      <Title $isRed={true}>Error 404</Title>
      <Paragrafo>This page does not exist!</Paragrafo>
    </Container>
  );
}

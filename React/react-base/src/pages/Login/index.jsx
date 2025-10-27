import { useDispatch, useSelector } from 'react-redux';
import ButtonStylized from '../../components/Button/Button';
import { clicarBotao } from '../../store/slices/appSlice';
import { Container } from '../../styles/Container';
import { Paragrafo, Title } from './styled';

export default function Login() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.app.status);
  const loading = status === 'loading';

  const handleClick = (tipo) => () => {
    dispatch(clicarBotao(tipo));
  };

  return (
    <Container>
      <Title $isRed={true}>
        Login
        <small>:::</small>
      </Title>
      <Paragrafo>Esta será a minha tela de login...</Paragrafo>

      <Container>
        <ButtonStylized
          type="button"
          size="small"
          variant="primary"
          onClick={handleClick('sucesso')}
          disabled={loading}
        >
          {loading ? '⏳ Carregando...' : 'Success'}
        </ButtonStylized>

        <ButtonStylized
          type="button"
          size="small"
          variant="secondary"
          onClick={handleClick('normal')}
          disabled={loading}
        >
          {loading ? '⏳ Carregando...' : 'Request'}
        </ButtonStylized>

        <ButtonStylized
          type="button"
          size="small"
          variant="danger"
          onClick={handleClick('erro')}
          disabled={loading}
        >
          {loading ? '⏳ Carregando...' : 'Failure'}
        </ButtonStylized>
      </Container>
    </Container>
  );
}

import { BrowserRouter } from 'react-router-dom';

import Button from './components/Button/Button';
import Header from './components/Header';
import RoutesApp from './routes';
import history from './services/history';
import GlobalStyles, { CenteredDiv } from './styles/GlobalStyles';

function App() {
  return (
    // CahtGPT informou que  history={history} não é mais usado na V6 do React, avaliar mais a frente
    <BrowserRouter history={history}>
      <GlobalStyles />
      <Header />
      <RoutesApp />
      <CenteredDiv>
        <Button> Component Login by me</Button>
      </CenteredDiv>
    </BrowserRouter>
  );
}

export default App;

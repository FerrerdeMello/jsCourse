import { Router } from 'react-router-dom';

import Button from './components/Button/Button';
import GlobalStyles, { CenteredDiv } from './styles/GlobalStyles';
import Header from './components/Header';
import RoutesApp from './routes';

function App() {
  return (
    <>
      <Router>
        <GlobalStyles />
        <Header />
        <RoutesApp />
        <CenteredDiv>
          <Button> Component Login by me</Button>
        </CenteredDiv>
      </Router>
    </>
  );
}

export default App;

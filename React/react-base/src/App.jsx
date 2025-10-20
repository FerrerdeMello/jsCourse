import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Button from './components/Button/Button';
import Header from './components/Header';
import RoutesApp from './routes';
import GlobalStyles, { CenteredDiv } from './styles/GlobalStyles';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <RoutesApp />
      <CenteredDiv>
        <Button> Component Login by me</Button>
      </CenteredDiv>
      <ToastContainer autoClose={3000} className={'toast-container'} />
    </BrowserRouter>
  );
}

export default App;

import Button from './components/Button/Button';
import Login from './pages/Login';
import GlobalStyles, { CenteredDiv } from './styles/GlobalStyles';
import Header from './components/Header';

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Login />
      <CenteredDiv>
        <Button> Component Login by me</Button>
      </CenteredDiv>
    </>
  );
}

export default App;

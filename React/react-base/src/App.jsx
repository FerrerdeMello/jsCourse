import Button from './components/Button/Button';
import Login from './pages/Login';
import GlobalStyles, { CenteredDiv } from './styles/GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyles />
      <Login />
      <CenteredDiv>
        <Button> Component Login by me</Button>
      </CenteredDiv>
    </>
  );
}

export default App;

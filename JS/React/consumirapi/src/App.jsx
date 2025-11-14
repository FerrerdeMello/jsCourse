import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';

import { createPersistor } from './store/reduxPersist';
import store from './store/store';

// import ButtonStylized from './components/Button/Button';
import Header from './components/Header';
import AppRoutes from './routes/AppRoutes';
import GlobalStyles from './styles/GlobalStyles';

// Criar o persistor a partir da store
const persistor = createPersistor(store);

function App() {
  return (
    <Provider store={store}>
      {/* PersistGate garante que a UI só renderize quando os dados persistidos forem carregados */}
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <GlobalStyles />
          <Header />
          <AppRoutes />
          <ToastContainer autoClose={3000} className={'toast-container'} />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;

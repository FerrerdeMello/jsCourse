import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import appReducer from './slices/appSlice'; // reducer do slice app

const persistConfig = {
  key: 'app',
  storage,
  whitelist: ['botaoClicado', 'status', 'message', 'error', 'loading'],
};

// reducer persistido
export const persistedReducer = persistReducer(persistConfig, appReducer);

// persistor será criado depois no store.js
export const createPersistor = (store) => persistStore(store);

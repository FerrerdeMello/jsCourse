import { configureStore } from '@reduxjs/toolkit';
import listenerMiddleware from './listeners/appListeners';
import { persistedReducer } from './reduxPersist';

const store = configureStore({
  reducer: {
    app: persistedReducer, // se for um slice só
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      listenerMiddleware.middleware
    ),
});

export default store;

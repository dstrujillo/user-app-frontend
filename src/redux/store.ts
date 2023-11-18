import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import settingsSlice from './slices/settings.slice';

const persistSetting = {
  key: 'settings',
  storage,
  whitelist: ['themeMode']
};

const store = configureStore({
  reducer: {
    [settingsSlice.name]: persistReducer(persistSetting, settingsSlice.reducer)
  }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
export default store;

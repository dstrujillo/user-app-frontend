import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type ThemeMode = 'light' | 'dark';

interface SettingsState {
  themeMode: ThemeMode;
}

const initialState: SettingsState = {
  themeMode: 'light'
};

const settingsReducer = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setThemeMode: (state, action: PayloadAction<ThemeMode>) => {
      state.themeMode = action.payload;
    }
  }
});

export const { setThemeMode } = settingsReducer.actions;

export default settingsReducer;

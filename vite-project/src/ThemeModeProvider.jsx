import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import getTheme from './theme';

const ThemeModeContext = createContext({ mode: 'system', setMode: () => {} });

export function useThemeMode() {
  return useContext(ThemeModeContext);
}

export default function ThemeModeProvider({ children }) {
  const [mode, setMode] = useState(() => {
    try {
      return localStorage.getItem('themeMode') || 'system';
    } catch (e) {
      return 'system';
    }
  });

  const [prefersDark, setPrefersDark] = useState(() => {
    try {
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    } catch (e) {
      return false;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('themeMode', mode);
    } catch (e) {
      // ignore
    }
  }, [mode]);

  useEffect(() => {
    let mql;
    try {
      mql = window.matchMedia('(prefers-color-scheme: dark)');
      const handler = (e) => setPrefersDark(e.matches);
      if (mql.addEventListener) mql.addEventListener('change', handler);
      else mql.addListener(handler);
      return () => {
        if (mql.removeEventListener) mql.removeEventListener('change', handler);
        else mql.removeListener(handler);
      };
    } catch (e) {
      return undefined;
    }
  }, []);

  const appliedMode = mode === 'system' ? (prefersDark ? 'dark' : 'light') : mode;

  const theme = useMemo(() => getTheme(appliedMode), [appliedMode]);

  return (
    <ThemeModeContext.Provider value={{ mode, setMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
}

export { ThemeModeContext };

'use client';
import * as React from 'react';
import NextAppDirEmotionCacheProvider from './EmotionCache';
import { ThemeProvider } from '@emotion/react';
import theme from './theme';
import { GlobalStyles } from './GlobalStyles';

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: 'css' }}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}

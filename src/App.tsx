import React from 'react';
import { RecoilRoot } from 'recoil';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'styles';
import { theme } from 'theme';

import AppRouter from './Router';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <RecoilRoot>
          <Router history={createBrowserHistory()}>
            <AppRouter></AppRouter>
          </Router>
        </RecoilRoot>
      </>
    </ThemeProvider>
  );
}

export default App;

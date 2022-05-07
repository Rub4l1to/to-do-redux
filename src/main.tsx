import React from 'react';
import ReactDOM from 'react-dom/client';

//* Redux
import { Provider } from 'react-redux';
import { store } from './redux/store';

//* Styled components
import { Global, ThemeProvider } from '@emotion/react';
import { Theme, GlobalStyles } from 'styles';

//* Notifications
import { Toaster } from 'react-hot-toast';

//* Pages
import { HomePage } from 'pages';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={Theme}>
        <Global styles={GlobalStyles} />
        <Toaster position="top-right" />
        <HomePage />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
);

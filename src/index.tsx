import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'styled-components/native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import HomeTabs from '@routes/HomeTabs';

import theme from '@theme/index';

import store, {persistor} from './store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>
          <NavigationContainer>
            <HomeTabs />
          </NavigationContainer>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;

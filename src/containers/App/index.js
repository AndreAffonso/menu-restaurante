import React from 'react';
import { Provider } from 'react-redux';
import store from '../../store';

// COMPONENTS
import Restaurant from '../../components/Restaurant';

import { AppWrapper, Title } from './styles';

const App = () => (
  <Provider store={store}>
    <AppWrapper>
      <Title>Restaurante Menu</Title>
      <Restaurant />
    </AppWrapper>
  </Provider>
);

export default App;

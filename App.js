import React from 'react';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';

import { Base } from './src/components/base';
import { store } from './src/redux/store';

const App = () => {
  return (
    <Provider store={store} >
      <Base />
    </Provider>
  )
};

export default App;

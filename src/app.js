import React from 'react';
import { Provider } from 'react-redux';
import TabsContainer from './containers/tabs-container';

import configureStore from './store';

export default () => (
  <Provider store={ configureStore() }>
    <TabsContainer />
  </Provider>
);
/** @format */
import React, { PureComponent } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';

import App from './App';
import { name as app } from './app.json';
import configureStore from './src/store/store';

const store = configureStore();

class GeoAccess extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent(app, () => GeoAccess);

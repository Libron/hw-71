import React from 'react';

import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import reducer from './store/reducer';
import Gallery from "./containers/Gallery/Gallery";

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

export default class App extends React.Component {
  render() {
    return (
        <Provider store={store}>
            <Gallery />
        </Provider>

    );
  }
}
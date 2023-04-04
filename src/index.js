import ReactDOM from 'react-dom/client';
import React from 'react';
import { store } from './store';
import { Provider } from 'react-redux';
import App from './app';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(
    <Provider store={store}>
        <App/>
    </Provider>
)
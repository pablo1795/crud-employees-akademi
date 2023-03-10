// @ts-check
import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import './index.css';

import { Provider } from 'react-redux';
import { store } from './app/store';

import { BrowserRouter } from 'react-router-dom';

import App from './App';

const root = ReactDOMClient.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);

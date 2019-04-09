import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';
import 'react-bootstrap';
import './scss/custom.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import WebFont from 'webfontloader';

WebFont.load({
    google: {
        families: ['Nunito', 'sans-serif']
    }
});

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
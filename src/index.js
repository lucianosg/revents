import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/layout/App.jsx';
import * as serviceWorker from './serviceWorker';

const rootEl = document.getElementById('root');

let render = () => {
    ReactDOM.render(<App />, rootEl);
}

if (module.hot) {
    module.hot.accept('./app/layout/App.jsx', () => {
        setTimeout(render)
    })
}

render();

serviceWorker.register();
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Api from './api';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const apiVersion = 30;
const developmentServer = 'https://cors-anywhere.herokuapp.com/https://play.dhis2.org/dev';
//const server = 'http://www.mocky.io/v2/5e00e11f2f00004b0013b796'
//https://play.dhis2.org/dev/api/programs
const server = 'https://play.dhis2.org/dev/'
const rootElement = document.getElementById('root');

const withBaseUrl = baseUrl => {
    Api.setConfig({
        baseUrl: `${baseUrl}/api`,
    });

    ReactDOM.render(<App />, rootElement);
};

// if (process.env.NODE_ENV === 'production') {
//     fetch('./manifest.webapp')
//         .then(response => response.json())
//         .then(manifest => {
//             withBaseUrl(`${manifest.activities.dhis.href}`);
//         })
//         .catch(e => {
//             console.error('Could not read manifest:', e);
//             ReactDOM.render(<code>No manifest found</code>, rootElement);
//         });
// } else {
//     withBaseUrl(server);
// }
withBaseUrl(server);

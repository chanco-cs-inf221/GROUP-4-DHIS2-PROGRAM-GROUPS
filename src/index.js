import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Api from './api';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const apiVersion = 2.31;
const developmentServer = 'https://cors-anywhere.herokuapp.com/https://play.dhis2.org/2.31dev';
//const server = 'http://www.mocky.io/v2/5e00e11f2f00004b0013b796'
//https://play.dhis2.org/dev/api/programs
        const server = "https://play.dhis2.org/2.31dev"
const rootElement = document.getElementById('root');

const withBaseUrl = baseUrl => {
    Api.setConfig({
        baseUrl: `${baseUrl}/api`,
    });
    ReactDOM.render(<App />, rootElement);
};
withBaseUrl(server);

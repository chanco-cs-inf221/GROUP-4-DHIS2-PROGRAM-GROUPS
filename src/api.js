
const basicAuth = 'Basic ' + btoa('admin:district');
const headers = new Headers({
    'Authorization' : basicAuth,
    'Content-type': 'application/json',
    Accept: 'application/json',
});

class Api {
    config = {
        baseUrl: '',
    };

    setConfig = config => {
        this.config = config;
    };

    //fetching program API
    getProgram = () => {
        return fetch(`${this.config.baseUrl}/programs.json`, {
            method: 'GET',
            mode: 'cors',
            credentials: 'include',
            headers,
        })
            .catch(error => error)
            .then(response => response.json());
            
    }

    //fetching program Icons API
    getProgramIcon = () => {
        return fetch(`${this.config.baseUrl}/icons.json`, {
            method: 'GET',
            mode: 'cors',
            credentials: 'include',
            headers,
        })
            .catch(error => error)
            .then(response => response.json());
            
    };

}

export default new Api();

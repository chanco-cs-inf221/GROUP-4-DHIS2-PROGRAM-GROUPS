import React, { Component, Fragment } from 'react';
import logo from '../logo.png';
import Api from '../api';
import './App.css';
import Navbar from './Navbar';
import Card from './Card';
import Footer from './Footer';
import Commodities from './Card';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            commodities: [],
            
        };
    }

    componentDidMount(){
        Api.getDataElement().then(data => {
            this.setState({
            commodities : data.programs})
        })
    }

    render() {
        return (
            <Fragment>
                <Navbar/>
                <Card commodities={this.state.commodities}/>
            
                <Footer/>
                
            </Fragment>

        );
    }
}

export default App;

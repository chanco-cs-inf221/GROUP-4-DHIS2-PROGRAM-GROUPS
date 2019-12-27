import React, { Component, Fragment } from 'react';
import logo from '../logo.png';
import Api from '../api';
import './App.css';
import Navbar from './Navbar';

import Card from './Card';
import Footer from './Footer';
import Commodities from './Card';
import Search from '../components/Search';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            filter: "",
            commodities: [],
            
        };
    }

    componentDidMount(){
        Api.getDataElement().then(data => {
            this.setState({
            commodities : data.programs})
        })

        
    }

    handleChange = event => {
        this.setState({ filter: event.target.value });
      };

    render() {
        const { filter, commodities } = this.state;
        
        
        console.log(commodities);

        return (
            
            <Fragment>
              
                <Navbar/>
            
                {/* <Card commodities={this.state.commodities}/> */}
                <Search staff={commodities}/>

            
                <Footer/>
                
            </Fragment>

        );
    }
}

export default App;

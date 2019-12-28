import React, { Component, Fragment } from 'react';
import Api from '../api';
import './App.css';
import AppNav from './AppNav';
import Footer from './Footer';
import Search from '../components/Search';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            filter: "",
            programs: [],
            icon: []
            
        };
    }

    componentDidMount(){
        // get data from program Api
        Api.getProgram().then(data => {
            this.setState({
            programs: data.programs})
        })
        
         // get data from icon Api
        Api.getProgramIcon().then(data => {
            this.setState({
            icon: data.icons})
        })
    }

    render() {
        const { filter, programs, icon } = this.state;
        return (      
    <Fragment>
        <AppNav/>
        <Search staff={programs} img={icon}/>
         <Footer/>
    </Fragment>

        );
    }
}

export default App
import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import { Card } from 'react-bootstrap'
import Typography from '@material-ui/core/Typography';
import { MDBCol, MDBIcon } from "mdbreact";
import './presentation.css';

class Search extends React.Component {
 
    constructor(props){
        super(props);

        this.state = {
            filter: "",
            staff : [],
            icon:[]
         
          };
        
    }
  handleChange = event => {
    this.setState({ filter: event.target.value });
  };

  render() {
    const { filter } = this.state;
    const { staff } = this.props; 
    const lowercasedFilter = filter.toLowerCase();
    const filteredstaff = staff.filter(item => {
      return Object.keys(item).some(key =>
        item[key].toLowerCase().includes(lowercasedFilter)
      );
    });

    return (
      <div>
            <br/>
        <input className="form-control my-0 py-0" type="text" placeholder="Search"  aria-label="Search" 
         value={filter} onChange={this.handleChange} />
          <span className="input-group-text purple lighten-3" id="basic-text1">
            <MDBIcon className="text-black" icon="search" />
          </span>
    <div className="wrap">
        {filteredstaff.map(item => (    
          <div key={item.program}>
            <div className="box one">
              <h1>{item.displayName}</h1>
            
           </div>
          </div>
        ))}
      </div>
  
      </div>
    );
  }
}

export default Search;
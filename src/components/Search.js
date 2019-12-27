import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import { Card } from 'react-bootstrap'
import Typography from '@material-ui/core/Typography';
import './presentation.css';

class Search extends React.Component {
 
    constructor(props){
        super(props);

        this.state = {
            filter: "",
            staff : [],
         
          };
        
    }
  handleChange = event => {
    this.setState({ filter: event.target.value });
  };

  render() {
    const { filter } = this.state;
    const { staff } = this.props;
    // console.log(staff)
    const lowercasedFilter = filter.toLowerCase();
    const filteredstaff = staff.filter(item => {
      return Object.keys(item).some(key =>
        item[key].toLowerCase().includes(lowercasedFilter)
      );
    });

    return (
      <div>
            <br />
           <h5> SEARCH PROGRAM </h5>
            {/* <SearchIcon /> */}
        <input  placeholder = "search programs" 
         value={filter} onChange={this.handleChange} />
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
//import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card } from 'react-bootstrap'
import Typography from '@material-ui/core/Typography';

import React from 'react'

const Commodities = ({ commodities }) => {
  return (
    <div>
      <center><h1>Contact List</h1></center>
      
      {commodities.map((commodity) => (     
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>{commodity.displayName}</Card.Title>
            <Card.Text>
            {commodity.displayName}
            </Card.Text>
          </Card.Body>
        </Card>
        
        ))}
    </div>
  )
};

export default Commodities;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, row, col, Container } from 'react-bootstrap'
import './CardStyle.css';

const Commodities = ({ commodities }) => {
  return (
<div>
    <div className="wrap">
      {commodities.map((commodity) => (     
        <div className="box one">
    <h1>{commodity.displayName}</h1>
  </div>
        
        ))}
  </div>
</div>
  )
};

export default Commodities;

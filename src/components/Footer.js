import React, { Component } from "react";

import styled from "styled-components";
import Typography from '@material-ui/core/Typography'

const FooterContainer = styled.div`
  text-align: center;
  font-size: 20px;
  color: #fff;
  position: absolute;
  width: 100% !important;
  height: 50px !important ;
  background:#3f51b5 ;
`;

class Footer extends Component {
  render() {
    return (
      <FooterContainer>
        <Typography variant="title">DHIS2 Program Groups @2019</Typography>
      </FooterContainer>
    );
  }
}

export default Footer;
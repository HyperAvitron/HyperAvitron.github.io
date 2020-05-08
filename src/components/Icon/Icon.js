import React, { Component } from "react";
import CDLIcon from "@cdl/icon";
import styled from "styled-components";


const IconColorStyle = styled.span`
 & svg path{
  fill: white;
  stroke: black;
  stroke-width: 1
 }
`;
class Icon extends Component {
  render() {
    return (
         
        <IconColorStyle>    
            <CDLIcon {...this.props} />  
        </IconColorStyle>          

    );
  }
}

export default Icon;

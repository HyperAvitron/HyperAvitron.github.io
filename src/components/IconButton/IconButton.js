import React, { Component } from "react";
import CDLIcon from "@cdl/icon";
import styled from "styled-components";


const Container = styled.div`
    border: 1px solid black;
    padding: 0 5px;
    display: inline-block;
`;

const Button = styled.button`
    font-size: 0.75rem;
    height: 1.875rem;
    line-height: 1.875rem;
    padding-left: 0.625rem;
    padding-right: 0.625rem;
    display: inline-block;
    cursor: pointer;
    margin: 0;
    padding-top: 0;
    padding-bottom: 0;
    white-space: nowrap;
    border: none;
    background: white;
`;


export default class IconButton extends Component {
  render() {
    return (
         
        <Container>    
            <CDLIcon {...this.props} />
            <Button onClick={this.props.onClick}><span>{this.props.children}</span></Button>
        </Container>          

    );
  }
}


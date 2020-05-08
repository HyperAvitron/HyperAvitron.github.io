import React, { Component } from "react";
import styled from "styled-components";
import { ModalHeader as ModalHeaderCDL } from '@cdl/modal';

const Container = styled(ModalHeaderCDL)`
    margin-bottom: 30px;
`;




export default class ModalHeader extends Component {
  render() {
    return (
         
        <Container {...this.props}/>             

    );
  }
}


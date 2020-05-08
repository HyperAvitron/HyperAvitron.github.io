import React from 'react';
import styled from "styled-components";
import TextAreaCDL from '@cdl/textarea';

const TextAreaContainer = styled.div`
    display: inline-block;
    width: 100%;

    label{
        font-size: 14px; 
        display: block;
        padding-bottom: 10px;
    }

    textarea{
        box-sizing: border-box;
        width: ${props => (props.fullWidth ? '100%' : 'calc(100% - 20px)') };
    }

`;

export default class TextArea extends React.Component {
  render() {
    return (
        <TextAreaContainer fullWidth={this.props.fullWidth}>
            <label>{this.props.label}</label>
            <TextAreaCDL  {...this.props} />
        </TextAreaContainer>
    );
  }
}


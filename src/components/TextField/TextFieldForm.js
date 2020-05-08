import React from 'react';
import styled from "styled-components";
import CDLTextField  from '@cdl/text-field';
var _ = require('lodash');


const TextFieldContainer = styled.div`
    margin-bottom: 20px;
    ${props => props.right ? 'float:right' : ''}


    #${props => props.containerId} {
        ${props => props.inline ? '' : 'width: calc(100% - 20px)'};
        ${props => props.right ? 'margin-right:0' : ''}
    }

    & input {
        box-sizing: border-box;
        
    } 

    
`;

export default class TextFieldForm extends React.Component {
    containerId;

    constructor(props) {
        super(props);
    
        this.containerId = this.props.id;
    }

    render() {
        let containerId;
        if(this.props.id){
            containerId = this.props.id;
        }else if(this.props.label){
            containerId = _.camelCase(this.props.label);
        }
        
        return (
            <TextFieldContainer containerId={containerId} inline={this.props.inline} right={this.props.right}>
                <CDLTextField {...this.props} id={containerId}/>
            </TextFieldContainer>    
        )
    }
}
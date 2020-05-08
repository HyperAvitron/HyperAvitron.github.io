import React from 'react';
import styled from "styled-components";



const Label = styled.label`
    display: block;
    margin-bottom: 0.625rem;
    line-height: 1;
    font-size: 0.875rem;
`;

const Input = styled.input`
    margin:0 5px;  
    margin-bottom: 0.625rem;   
    height: 28px;
    font-size: 0.75rem;
    padding: 0 10px;
    border: 1px solid #929292;
`;

const Container = styled.div`
    & ${Input}:nth-child(2){
        width:25px;
        margin-left: 0;
    }

    & ${Input}:nth-child(3){
        width:50px;
    }

    & ${Input}:nth-child(4){
        width:25px;
    }
`;

export default class AccountNumber extends React.Component{   
    render() {
        return (
            <div>
                <Container>
                    <Label>{this.props.label}</Label>
                    <Input type="text" maxLength={3} />&mdash;
                    <Input type="text" maxLength={6} />&mdash; 
                    <Input type="text" maxLength={3} />
                </Container>
            </div>
        )
    }
}
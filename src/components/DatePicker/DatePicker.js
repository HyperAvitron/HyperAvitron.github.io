import React from 'react';
import styled from "styled-components";
import CDLDatePicker from '@cdl/date-picker';

const Label = styled.label`
    display: block;
    margin-bottom: 0.625rem;
    line-height: 1;
    font-size: 0.875rem;
`;

const Container = styled.div`
    width: calc(100% - 20px);

    & input{
      width: calc(100% - 45px);
      height: 29.5px;
    }

    & > div > div > div > div{
      width: 100%;
      border: 1px solid #929292;
    }
`;

export default class DatePicker extends React.Component {
  render() {
    return (
        <Container>
            <Label>{this.props.label}</Label>
            <CDLDatePicker {...this.props} />
        </Container>
    );
  }
}


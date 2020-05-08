import React from 'react';
import styled from "styled-components";
import CDLDropdown from '@cdl/dropdown-legacy';

const DropdownContainer = styled.div`
    display: inline-block;

    div{
        label{
            font-size: 14px; 
            display: block;
            line-height: 1;
        }
    }

    div.Select-control{
        height: 32px;
    }

`;

export default class Dropdown extends React.Component {
  render() {
    return (
        <DropdownContainer>
            <CDLDropdown  {...this.props} />
        </DropdownContainer>
    );
  }
}


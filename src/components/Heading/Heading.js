import React from 'react';
import styled from "styled-components";
import CDLHeading from '@cdl/heading';


const HeadingContainer = styled.div`
    margin-top: 40px;
    margin-bottom: 30px;
`;

export default class Heading extends React.Component {
  render() {
    return (
        <HeadingContainer>
            <CDLHeading {...this.props} />
        </HeadingContainer>
    );
  }
}


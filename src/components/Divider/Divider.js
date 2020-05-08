import React from 'react';
import styled from "styled-components";


const DividerContainer = styled.div`
  margin-top: 30px;
  margin-bottom: 40px;

  hr {
    color:'#D7D8D6';
  }

`;

export default class Divider extends React.Component {
  render() {
    return (
      <DividerContainer>
        <hr />
      </DividerContainer>
    );
  }
}


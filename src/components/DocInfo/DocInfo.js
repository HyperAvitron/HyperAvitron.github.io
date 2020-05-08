import React from 'react';
import styled from "styled-components";
import Icon from "components/Icon/Icon.js";


const Container = styled.div`
    padding: 20px 0;
    display: inline-block;
`;

const InfoBox = styled.div`
    float: left;
    padding-right: 15px;
`;

export default class DocInfo extends React.Component {
  render() {
    return (
      <Container>
        <InfoBox>
            DocumentExpressID
            <br/>
            DEAMT000001
        </InfoBox>

        <InfoBox className="leftBorder">
            Master document number
            <br/>
            -
        </InfoBox>

        <InfoBox className="leftBorder">
            Master document date
            <br/>
            DEAMT000001
            <Icon name="edit" size={18}/>
        </InfoBox>
      </Container>
    );
  }
}


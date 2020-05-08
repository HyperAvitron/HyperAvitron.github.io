import React from 'react';
import styled from "styled-components";
import CDLCollapsible from '@cdl/collapsible';
import $ from "jquery";

const CollapsibleContainer = styled(CDLCollapsible)`

    > div:first-child {
        padding-top: 30px;
        padding-bottom: 30px;
        padding-right: 20px;

        > div:first-child {
            > div:first-child {
                font-size: 20px;
                font-family: "HSBC-Universe-Medium";
            }
        }

        > div:nth-child(2) {
            padding-right: 5px;
        }

    }

    
`;

export default class Collapsible extends React.Component {
    componentDidMount() {
        $(".collapsible").hover(function(){
            $(".collapsible > div > div > div").css("text-decoration", "none");
        });
    }

    render() {
        return (
        <CollapsibleContainer {...this.props}/>        
        );
    }
}


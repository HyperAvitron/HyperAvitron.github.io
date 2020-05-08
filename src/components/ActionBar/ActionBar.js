import React, { Component } from 'react';
import styled from "styled-components";
import CDLButton from '@cdl/button';
import $ from 'jquery';

const Container = styled.div`
    position: fixed; 
    height: 30px;
    width: 1180px;
    padding: 20px 50px;
    border-top: 2px solid black;
    border-bottom: 2px solid black;
    background: white;
`;

const RightBtn = styled.div`
    float: right;
    margin-right: 10px;
`;

export default class ActionBar extends Component {
    componentDidMount(){
        $(function() {

        
            $(window).scroll(function(evt) { 
                if($('#actionbar').length>0){
                    var x = $('footer').offset().top;
                    var y = $('#actionbar').offset().top;
    
                    if ((x-y)>75) {
                        $('#actionbar').css('bottom', '0');
                    } else {
                        $('#actionbar').css('bottom', '100px');
                    }
                }              
                
            });
        });
    }

    render() {

        return(
            <Container id="actionbar">
                <CDLButton >Cancel</CDLButton>
                <RightBtn><CDLButton themeColor="primary">Save</CDLButton></RightBtn>
                <RightBtn><CDLButton>Print EI</CDLButton></RightBtn>
                <RightBtn><CDLButton>Wolf Scan</CDLButton></RightBtn>
            </Container>
        )
    }
}
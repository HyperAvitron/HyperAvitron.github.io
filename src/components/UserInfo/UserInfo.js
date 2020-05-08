import React, { Component } from "react";
import styled from "styled-components";
import CDLIcon from '@cdl/icon';

const Container = styled.div`
    margin-right: 30px;
    float: left;
    font-size: 12px;
    text-align: right;
    cursor: pointer;
`;

const UserInfoIcon = styled.div`
    float: left;
    padding-left: 5px;
    line-height: 32px;
`;

const HeaderMenu = styled.div`
    position: fixed;
    top: 60px;
    z-index: 100;
    background-color: #1d262c;
    padding: 12px 20px;
    width: 205px;

    & > a{
        color: white;
        text-decoration: none;
    }
`;


class UserInfo extends Component {
    state = {
        isOpen: false
    };
  

  toggle = () => {
    this.setState({
        isOpen: !this.state.isOpen
    });
  }

  render() {
    const {
        toggle,
        state: { isOpen }
      } = this;
    let iconName = isOpen ? 'chevron-up' : 'chevron-down';
    let menuItem = isOpen ? (<HeaderMenu onClick={(e) => { e.stopPropagation();}}>
                                <a href="/ChangePWD">
                                    Change Password
                                </a>
                            </HeaderMenu>) : '';
    return (
        <Container onClick={toggle}>
            <div style={{float: 'left'}}>
                <span >
                    User name<br/>Last login: DD MMM YYYY HH:MM:SS
                </span>
            </div>
            <UserInfoIcon>
                <CDLIcon id="iconDown" name={iconName} color="White"/>
            </UserInfoIcon>
            {menuItem}   
        </Container>

    );
  }
}

export default UserInfo;

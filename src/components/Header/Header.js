import React from 'react';
import styled from "styled-components";
import CDLHeader from '@cdl/header';
import CDLButton from '@cdl/button';
import CDLNavigation from '@cdl/navigation';
import CDLPageHeader from '@cdl/page-header';

import UserInfo from "../UserInfo/UserInfo.js";

const HeaderWrapper = styled.div.attrs({
    className: "header-wrapper"
  })`
  
    header {
        max-width: 1280px;
        left: auto;        
    },

    div.huowur{
        max-width: 1280px;
        left: auto;
        z-index: 99;
    }

    div.heading div h1{
        font-size:26px;
    }

    div nav ul li{
        padding: 0 15px;
    }

    div.headerTitle{
        background: #1d262c;
        border-left: 0.0625rem solid rgb(253, 253, 253, 0.2);
        margin: 0px 15px;
        padding-left: 15px;
        float: left;
        height: 20px;
    }

    div.headerTitle a{
        color: white;
        text-decoration: none;
    }

    div.backgroundBox{
        position: fixed;
        z-index: 99;
        height: 60px;
        width: 100%;
        left: 0;
        max-width: 1000rem;
        background: #1d262c;
    }

    div.borderline{
        position: fixed;
        height: 40px;
        width: 100%;
        left: 0;
        top: 60px;
        max-width: 1000rem;
        box-shadow: inset 0 -0.0625rem 0 0 rgba(237,237,237,0.15);
    }

`;

function logOff() {
    window.location.href = '/Logout';
}



export default function Header(props) {
    let headingCls = "heading";
    if(props.noNav){
        headingCls += " noNav";
    }
    const { match } = props;
    return (
        <HeaderWrapper>
            <div className="backgroundBox"></div>
            <CDLHeader linkTo="/Home"> 
                <div className="headerTitle">
                    <a href="/Home">DocumentExpress</a>
                </div>

                <div style={{marginLeft: 'auto'}}>            
                {props.isLogin &&           
                    <div>
                         <UserInfo />
                        
                        <CDLButton themeColor="secondary" variant="slate" onClick={logOff}>Log off</CDLButton>
                    </div>    
                }
                </div>
            </CDLHeader>


            {props.showNav &&
                <div>
                    
                    <CDLNavigation
                            links={[
                                {title: 'Home', url: '/Home'},
                                {title: 'Doc. preparation', url: `/Doc`}
                            ]}/>
                    <div className="borderline"></div>
                </div>
            }        

            {props.title &&
                <div className={headingCls}>      
                    <CDLPageHeader pageTitle={props.title} withLeftArrow={props.withLeftArrow}
                        pageLinkUrl="javascript:window.history.back();" />
                </div>
            }
        </HeaderWrapper>
    )
}
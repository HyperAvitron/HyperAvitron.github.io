import React from 'react';
import styled from "styled-components";
import CDLFooter from '@cdl/footer';
import Icon from "components/Icon/Icon.js";
import CDLIcon from "@cdl/icon";

const links = [{"title":"Privacy and security", "url": "/Home", "icon": "security-lock"}];
const supplementaries= [{"title":"Terms of use", "url": "/Home"},
                        {"title":"Hyperlink policy", "url": "/Home", "class":"test"}];

const Footer = styled.footer`
    div.footer{
        height: 50px;
        padding: 0 3.125rem;
    }

    div.flex-container{
        display: flex;
        margin: 0;
        padding: 0;
        flex-wrap: wrap;
    }

    div.footerLink{
        position: relative;
        margin-bottom: 1.25rem;
        margin-right: 30px;
        display: inline-block;
    }

    & a{
        display: inline-block;
        color: #fff;
        -webkit-text-decoration: none;
        text-decoration: none;
        line-height: 1;
        font-size:12px;
        margin: 18px 0;

        span{
            padding-right:10px;
        }
    }

    

    & ul {
        margin: 0;
        padding: 0;
    }

    & svg {
        position: relative;
        top: -2px;
    }

    .footerBackground{
        height: 50px;
        position: absolute;
        width: 100%;
        left: 0;
        max-width: 1000rem;
        background: #1d262c;

    }

    .copyRight{
        color: white;
        float: right;
        font-size:12px;
        font-weight: 200;
        margin: 18px 0;
        position: relative;
    }
`;                       

export default function Header(props) {

    return (
        <Footer>
            

            <div className="footer">
                <nav >
                    <ul>
                        <li>
                            <a href="/Privacy" target="_blank">
                                <Icon name="security-lock" />
                                Privacy and security
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="footer">
                <div className="footerBackground"></div>

                    <div className="footerLink">
                        <a href="/Terms" target="_blank">Terms of use</a>
                    </div>
                    <div className="footerLink">
                        <a href="/Policy" target="_blank">Hyperlink policy</a>
                    </div>

                    <div className="copyRight">© Copyright. The Hongkong and Shanghai Banking Corporation Limited 2002-2015. All rights reserved</div>

                
            </div>
            
        </Footer>
    )
}
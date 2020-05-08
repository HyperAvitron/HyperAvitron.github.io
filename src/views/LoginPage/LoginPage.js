import React from 'react';
import '../../App.css';


import Header from "../../components/Header/Header.js";
import TextField from "../../components/TextField/TextField.js";
import Footer from "../../components/Footer/Footer.js";
import Divider from "../../components/Divider/Divider.js";

import { Section, Row, Column, Paragraph, Separator} from '@cdl/layout';
import CDLButton from '@cdl/button';


function login() {
  window.location.href = '/Home';
}



function LoginPage() {

  return (
    <div className="App">
      
        <Header />
          
        
        <div className="mainContent mainContent1">
          <h1 className="loginTitle">Welcome to DocumentExpresss!</h1>
          <Paragraph >For registered <span style={{'fontFamily': 'HSBC-Universe-Medium'}}>DocumentExpress</span> users, 
            enter your user name and password to logon to the system.</Paragraph>
          
          <Row>
            <Column size={4.3}>
              <TextField labelCustom="User ID" placeholder="User Name"/>
            </Column>

            <Column size={3.9}>
              <TextField labelCustom="Password" placeholder="Password" type="password"/>              
            </Column>

            <Column size={1.2}>
              <div className="loginBtn">
                <CDLButton themeColor="primary" onClick={login}>Logon</CDLButton>
              </div>
            </Column>
          </Row>
          
          <Divider />

          <p style={{fontSize: '14px'}}>
          Click <a href="#">here</a> to learn more about how HSBC protects you online and steps you can improve your online security. Please note that DocumentExpress does not use digital certificates.
          </p>

          <Paragraph>
          Please note that transactions over the Internet may be subject to interruption, transmission blackout, delayed transmission due to Internet traffic, or incorrect data transmission due
to the public nature of the Internet. HSBC cannot assume responsibility for malfunctions in communications facilities not under our control that may affect the accuracy or
timeliness of messages you send.
          </Paragraph>
        
        
          
        </div>


        <Footer />
          
        
    </div>
  );
}

export default LoginPage;

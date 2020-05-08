import React from 'react';
import '../../App.css';

import Header from "../../components/Header/Header.js";
import TextField from "../../components/TextField/TextField.js";
import Footer from "../../components/Footer/Footer.js";


import { Section, Row, Column, Paragraph, Separator} from '@cdl/layout';
import CDLUserMessage from '@cdl/user-message';
import CDLButton from '@cdl/button';

function login() {
  window.location.href = '/Home';
}



function PasswordPage() {
    const closeBtn = {button: {name: "delete"}};
    const closeText = '<CDLIcon name="delete" />';

  return (
    <div className="App">
      
        <Header title="Change password" withLeftArrow noNav isLogin/>
          
        
        <div className="mainContent mainContentPWD">

            <CDLUserMessage type='cookie' border showCloseButton classes={closeBtn} closeText="Close">
                This system may only be accessed by authorised users, 
                and that unauthorised access might be considered as a criminal act in certain jurisdictions.
            </CDLUserMessage>

            <div style={{paddingTop: '15px'}}>
                <Row>
                    <Column size={5}>
                        <div style={{paddingBottom: '10px'}}>
                            <TextField labelCustom="Existing password*" type="password" longLabel/>
                        </div>
                        <div style={{paddingBottom: '10px'}}>
                            <TextField labelCustom="New password*" type="password" longLabel/>
                        </div>
                        <div style={{paddingBottom: '10px'}}>
                            <TextField labelCustom="Confirm password*" type="password" longLabel/>
                        </div>
                        <div style={{paddingBottom: '10px', float: 'right', paddingRight: '35px'}}>
                            <CDLButton themeColor="primary" onClick={login}>Apply now</CDLButton>
                        </div>
                    </Column>

                    <Column size={6}>
                        <div style={{borderLeft: '0.8px solid black', paddingLeft: '30px',}}>
                            New password must:
                            <ul className="importantNotesUL">
                                <li>At least twelve (12) characters and maximum twenty (20) characters</li>
                                <li>Include at least one Uppercase letters (A-Z)</li>
                                <li>Include at leaset one Lowercase letters (a-z)</li>
                                <li>Include at least one Numbers (0-9)</li>
                                <li>{"Include at least one Special Characters (!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~)"}</li>
                                <li>Cannot contain consecutive characters (aa, 22, ..)</li>
                                <li>Not be based on the username</li>
                            </ul>
                        </div>
                    </Column>
                </Row>
            </div>
          
          

          

          
        
        
          
        </div>


        <Footer />
          
        
    </div>
  );
}

export default PasswordPage;

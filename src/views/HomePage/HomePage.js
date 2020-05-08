import React from 'react';

import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";
import ContactBox from "../../components/ContactBox/ContactBox.js";
import Divider from "../../components/Divider/Divider.js";
import Heading from "../../components/Heading/Heading.js";

import Grid from '@material-ui/core/Grid';
import { Section, Row, Column, Paragraph, Separator} from '@cdl/layout';



export default function HomePage(props) {
    

    return (
        <div className="App">
            <Header isLogin showNav title="Welcome to HSBC DocumentExpress main page"/>

            
            
            

            <div className="mainContent">

                <div className="empty"></div>

                <Heading level={2} brandbar><span className="medium">Important information</span></Heading>

                <Paragraph>If you have any specific queries or experience technical difficulties please contact your local HSBC Global Trade and Receibables Finance office:</Paragraph>

                <h4 style={{fontWeight:'500', fontSize: '16px'}}>Contact details</h4>

                <Grid container spacing={0}>
                    <Grid item xs={3}>
                        <ContactBox title="Australia" emails="cfsinternet@hsbc.com.au" 
                            phones={['+61 292552032']}/>
                    </Grid>
                    <Grid item xs={3}>
                        <ContactBox title="Canada" emails="HSBC.TSC.DE.Request@hsbc.ca" />
                    </Grid>
                    <Grid item xs={3}>
                        <ContactBox title="Hong Kong" phones={['+852 27488288']} />
                    </Grid>
                    <Grid item xs={3} style={{marginBottom: '20px'}}>
                        <ContactBox title="Malaysia" emails="tradeservices@hsbc.com.my" 
                            phones={['+61 292552032']}/>
                    </Grid>


                    <Grid item xs={3}>
                        <ContactBox title="United States" emails="HSBC.TSC.DE.Request@us.hsbc.com" />
                    </Grid>
                    <Grid item xs={3}>
                    <ContactBox title="Singapore" emails="tradeITS@hsbc.com.sg" 
                            phones={['+65 65305178','+65 65305189','+65 65305140']}/>
                    </Grid>
                </Grid>
            

                <div style={{clear: 'both'}}></div>
                
                <Divider />

                <Heading level={2} brandbar><span className="medium">Important security advice</span></Heading>

                <div>Please familiarise your self with these important details:</div>
                <ul className="importantNotesUL">
                    <li><strong>Never</strong> write down your password or <strong>reveal</strong> it to anyone, not <strong>even</strong> to colleagues, family or friends.</li>
                    <li>No one at HSBC will <strong>ever</strong> ask you for your password.</li>
                    <li>Choose a unique user ID and password, using a combination of letters and numbers for passwords (letters are not case sensitive)</li>
                    <li>Do not use user IDs or passwords which you also use for other online services or Internet sites.</li>
                    <li>Do not access DocumentExpress from computer terminals which are shared with other users.</li>
                    <li><strong>Change</strong> your password on a regular basis. To change your password, click here.</li>
                    <li>Always <strong>logout properly</strong> using the “Logout” button and <strong>close the browser window</strong> when you finish using DocumentExpress. 
                        This will ensure that the session is terminated securely.</li>
                    <li>If you suspect any unusual account activity or discrepancies with your last logon time, date and status, 
                        inform your DocumentExpress administrator <strong>immediately</strong>.</li>
                    <li>DocumentExpress users are advised to install appropriate virus detection software and firewall. 
                        Download and apply security updates and patches to the PC/browser when they are made available.</li>
                </ul>
                
            </div>
            <Footer />
        </div>
    )
}
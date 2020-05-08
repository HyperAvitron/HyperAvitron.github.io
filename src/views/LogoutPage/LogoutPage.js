import React from 'react';
import '../../App.css';

import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";

import { Section, Row, Column, Paragraph, Separator} from '@cdl/layout';
import CDLUserMessage from '@cdl/user-message';
import CDLDataTable from '@cdl/data-table';
import CDLButton from '@cdl/button';
import CDLHeading from '@cdl/heading';

function login() {
  window.location.href = '/Login';
}

const tableData = [{'loginDate':'27 Nov 2013', 'loginTime':'14:03:23',
                    'logoutDate':'27 Nov 2013', 'logoutTime':'15:03:23'}];

function LogoutPage() {

  return (
    <div className="App">
      
        <Header />
          
        
        <div className="mainContent mainContent1">
            
            <div style={{paddingTop: '20px'}}>
              <CDLUserMessage type='cookie' border showCloseButton closeText="Close" >
                  This system may only be accessed by authorised users, 
                  and that unauthorised access might be considered as a criminal act in certain jurisdictions.
              </CDLUserMessage>
            </div>
          <CDLHeading>You’ve been logged out successfully</CDLHeading>
          
          <Paragraph>Thank you for using HSBC DocumentExpress, Allen!</Paragraph>
          
          <Row>
              <Column size={8}>
                  <CDLDataTable defaultPageSizeOption={{'value':'1'}} showPagination={false} defaultPageSize={1}
                  style={{overflowY: 'hidden'}}
          data={tableData}
          columns={[
            {
              Header: 'Login date',
              accessor: 'loginDate',
              sortable: false
            },
            {
              Header: 'Login time',
              accessor: 'loginTime',
              sortable: false
            },
            {
              Header: 'Logout date',
              accessor: 'logoutDate',
              sortable: false
            },
            {
              Header: 'Logout time',
              accessor: 'logoutTime',
              sortable: false
            }
          ]}
          
        />
              </Column>
        </Row>       

        <Row>
              <Column size={8}>
                <CDLButton themeColor="primary" onClick={login} style={{float: 'right'}}>Re-login</CDLButton>
              </Column>
        </Row> 
          
        </div>


        <Footer />
          
        
    </div>
  );
}

export default LogoutPage;

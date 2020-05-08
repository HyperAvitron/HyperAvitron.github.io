import React from 'react';
import CommonSections from "views/DocPreparation/Sections/CommonSections.js";
import InvoiceSection from "views/DocPreparation/Sections/InvoiceSection.js";
import Heading from "components/Heading/Heading.js";
import Collapsible from "components/Collapsible/Collapsible.js";
import Page from "components/Page/Page.js";
import Tab from "components/Tab/Tab.js";
import ActionBar from "components/ActionBar/ActionBar.js";
import DocInfo from "components/DocInfo/DocInfo.js";
import Grid from '@material-ui/core/Grid';

const tabs =[{title: 'Master Document', url: '/Doc'},
                {title: 'Invoice', url: '/Doc/Invoice'},
                {title: 'Packing List', url: '/PackingList'},
                {title: 'Beneficiary Cert/Miscellaneous Doc', url: '/Beneficiary'},
                {title: 'Bill of Exchange', url: '/BillExchange'},
                {title: 'Export Trade Collection/Negotiation Instructions', url: '/Export'}];

export default function Invoice(props) {
    

    return (
        <Page isLogin showNav title="Doc. preparation">
            
            <div className="mainContent">
                <Tab tabs={tabs}></Tab>

            <Grid container spacing={0} >
                <Grid item xs={12} >
                    <DocInfo />
                </Grid>
            </Grid>


            <CommonSections />
            
            <Collapsible label="5. Invoice(s)" className="collapsible last">
                <InvoiceSection />
            </Collapsible>

            

            
            
            </div>

            <ActionBar />

        </Page>
    )
}
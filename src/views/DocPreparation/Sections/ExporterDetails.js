import React from 'react';
import Heading from "components/Heading/Heading.js";
import { Section, Row, Column, Paragraph, Separator} from '@cdl/layout';
import Dropdown from "components/Dropdown/Dropdown.js";
import TextFieldForm from "components/TextField/TextFieldForm.js";
import Divider from "components/Divider/Divider.js";
import Grid from '@material-ui/core/Grid';
import AccountNumber from "components/AccountNumber/AccountNumber.js";
import DropdownEditable from "components/Dropdown/DropdownEditable.js";
import Autocomplete from "components/Autocomplete/Autocomplete.js";

const width3Column = 250;
const width4Column = 346;

export default function ExporterDetails(props) {
    return (
        <div>
            <Heading level={2} brandbar><span className="medium">Exporter details (drawer / DC beneficiary)</span></Heading>

            <Grid container spacing={0}>
                <Grid item xs={4}>
                    {/*<Dropdown labelOutside="Exporter code*" selectWidth={366} 
                        options={[
                            {label: '0', value: '0'},
                            {label: '1', value: '1'},
                            {label: '2', value: '2'},
                            {label: '3', value: '3'}
                        ]}/>*/}

<Autocomplete label="Exporter code*" id="exporterCode" options={[
          'Papaya',
          'Persimmon',
          'Paw Paw',
          'Prickly Pear',
          'Peach',
          'Pomegranate',
          'Pineapple'
        ]} />
                </Grid>
                <Grid item xs={4}>
                    <TextFieldForm label="Exporter name" id="exporterName"/>
                </Grid>
                <Grid item xs={4}>
                    <TextFieldForm label="Contact name" id="contactName"/>
                </Grid>


                <Grid item xs={4}>
                    <TextFieldForm label="Address line 1" minWidth={width4Column}/>
                </Grid>
                <Grid item xs={4}>
                    <TextFieldForm label="Address line 2" minWidth={width4Column}/>
                </Grid>
                <Grid item xs={4}>
                    <TextFieldForm label="Address line 3" minWidth={width4Column}/>
                </Grid>


                <Grid item xs={3}>
                    <TextFieldForm label="City" minWidth={width3Column}/>
                </Grid>
                <Grid item xs={3}>
                    <TextFieldForm label="State" minWidth={width3Column}/>
                </Grid>
                <Grid item xs={3}>
                    <Autocomplete label="Country" selectWidth={270} id="country"
                            options={[
                                {label: '0', value: '0'},
                                {label: '1', value: '1'},
                                {label: '2', value: '2'},
                                {label: '3', value: '3'}
                            ]}/>
                </Grid>
                <Grid item xs={3}>
                    <TextFieldForm label="Postal code" minWidth={width3Column}/>
                </Grid>



                <Grid item xs={3}>
                    <TextFieldForm label="Telephone number" minWidth={width3Column}/>
                </Grid>
                <Grid item xs={3}>
                    <TextFieldForm label="Fax number" minWidth={width3Column}/>
                </Grid>
                <Grid item xs={3}>
                    <TextFieldForm label="Email address" minWidth={width3Column} type="email" />
                </Grid>
                <Grid item xs={3}>
                    <TextFieldForm label="Exporter reference*" minWidth={width3Column}/>
                </Grid>



                <Grid item xs={3}>
                    <TextFieldForm label="Registration number" minWidth={width3Column}/>
                </Grid>
                <Grid item xs={3}>
                    <AccountNumber label="Exporter account number*" />
                </Grid>
                <Grid item xs={3}>
                    <AccountNumber label="Debit charges acct. no." />
                </Grid>



                

            </Grid>
            

            <Divider />


            <Heading level={2} brandbar><span className="medium">Importer details (drawee / DC applicant)</span></Heading>

            <Grid container spacing={0}>
                <Grid item xs={4}>
                    <Dropdown labelOutside="Exporter code*" selectWidth={366} 
                        options={[
                            {label: '0', value: '0'},
                            {label: '1', value: '1'},
                            {label: '2', value: '2'},
                            {label: '3', value: '3'}
                        ]}/>
                </Grid>
                <Grid item xs={4}>
                    <TextFieldForm label="Exporter name" minWidth={width4Column}/>
                </Grid>
                <Grid item xs={4}>
                    <TextFieldForm label="Contact name" minWidth={width4Column}/>
                </Grid>


                <Grid item xs={4}>
                    <TextFieldForm label="Address line 1" minWidth={width4Column}/>
                </Grid>
                <Grid item xs={4}>
                    <TextFieldForm label="Address line 2" minWidth={width4Column}/>
                </Grid>
                <Grid item xs={4}>
                    <TextFieldForm label="Address line 3" minWidth={width4Column}/>
                </Grid>


                <Grid item xs={3}>
                    <TextFieldForm label="City" minWidth={width3Column}/>
                </Grid>
                <Grid item xs={3}>
                    <TextFieldForm label="State" minWidth={width3Column}/>
                </Grid>
                <Grid item xs={3}>
                    <Dropdown labelOutside="Country" selectWidth={270} 
                            options={[
                                {label: '0', value: '0'},
                                {label: '1', value: '1'},
                                {label: '2', value: '2'},
                                {label: '3', value: '3'}
                            ]}/>
                </Grid>
                <Grid item xs={3}>
                    <TextFieldForm label="Postal code" minWidth={width3Column}/>
                </Grid>



                <Grid item xs={3}>
                    <TextFieldForm label="Telephone number" minWidth={width3Column}/>
                </Grid>
                <Grid item xs={3}>
                    <TextFieldForm label="Fax number" minWidth={width3Column}/>
                </Grid>
                <Grid item xs={3}>
                    <TextFieldForm label="Email address" minWidth={width3Column} type="email" />
                </Grid>
                






            </Grid>


        </div>
    )    
}
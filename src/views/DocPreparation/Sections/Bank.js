import React from 'react';
import Heading from "components/Heading/Heading.js";
import Dropdown from "components/Dropdown/Dropdown.js";
import TextFieldForm from "components/TextField/TextFieldForm.js";
import Divider from "components/Divider/Divider.js";
import Grid from '@material-ui/core/Grid';
import CDLButton from '@cdl/button';
import CDLDataTable from '@cdl/data-table';
import CDLDropdown from '@cdl/dropdown-legacy';
import Autocomplete from "components/Autocomplete/Autocomplete.js";

const width3Column = 250;
const width4Column = 346;

function getList() {

}

const tableData = [{accountTitle: 'aaa'}, {accountTitle: 'bbb'}];

export default function Bank(props) {
    return (
        <div>
            <Heading level={2} brandbar><span className="medium">Importer’s bank/DC issuing bank details</span></Heading>

            <div className="rightBtn">
                <CDLButton  onClick={getList}>Get list</CDLButton>
            </div>

            <Grid container spacing={0} style={{paddingRight:'20px'}}>
                <Grid item xs={12} style={{paddingBottom:'20px'}}>
                <CDLDataTable maxRows={5} showPagination={false} defaultPageSize={1} id="ttt"
          data={tableData}
          columns={[
            {
              Header: '',
              accessor: '',
              Cell: ({ original }) => {
                return (
                    <input
                        type="checkbox"
                        className="checkbox"
                        
                    />
                );
               },
               width: 50,
               sortable: false
            },
            {
              Header: 'City',
              accessor: 'accountTitle'
            },
            {
              Header: 'Bank name',
              accessor: 'accountNumber'
            }
          ]}
          
        />
                </Grid>
            


                <Grid item xs={3}>
                    <TextFieldForm label="Bank name*" minWidth={width3Column}/>
                </Grid>
                <Grid item xs={3}>
                    <TextFieldForm label="Bank branch" minWidth={width3Column}/>
                </Grid>
                <Grid item xs={3}>
                    <TextFieldForm label="Bank reference" minWidth={width3Column}/>
                </Grid>
                <Grid item xs={3}>
                    <TextFieldForm label="Bank trade department" minWidth={width3Column}/>
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


            </Grid>
            

            <Divider />


            <Heading level={2} brandbar><span className="medium">Forwarding agent details</span></Heading>

            <Grid container spacing={0}>
                <Grid item xs={4}>
                    <Dropdown labelOutside="Forwarding agent code" selectWidth={366} 
                        options={[
                            {label: '0', value: '0'},
                            {label: '1', value: '1'},
                            {label: '2', value: '2'},
                            {label: '3', value: '3'}
                        ]}/>
                </Grid>
                <Grid item xs={4}>
                    <TextFieldForm label="Forwarding agent name" minWidth={width4Column}/>
                </Grid>
            </Grid>    

            <Grid container spacing={0}>            
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


            </Grid>

            <Divider />


            <Heading level={2} brandbar><span className="medium">Consignee details</span></Heading>

            <Grid container spacing={0}>
                <Grid item xs={4}>
                    <Dropdown labelOutside="Forwarding agent code" selectWidth={366} 
                        options={[
                            {label: '0', value: '0'},
                            {label: '1', value: '1'},
                            {label: '2', value: '2'},
                            {label: '3', value: '3'}
                        ]}/>
                </Grid>
                <Grid item xs={4}>
                    <TextFieldForm label="Forwarding agent name" minWidth={width4Column}/>
                </Grid>
            </Grid>    

            <Grid container spacing={0}>            
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


            </Grid>


        </div>
    )    
}
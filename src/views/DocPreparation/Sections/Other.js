import React from 'react';
import { Section, Row, Column, Paragraph, Separator} from '@cdl/layout';
import Dropdown from "components/Dropdown/Dropdown.js";
import TextFieldForm from "components/TextField/TextFieldForm.js";
import TextArea from "components/TextArea/TextArea.js";
import Grid from '@material-ui/core/Grid';
import DatePicker from "components/DatePicker/DatePicker.js";

const width2Column = 173;
const width3Column = 270;
const width4Column = 366;

function onDateSelected() {

}

export default function Other(props) {
    return (
        <div>
            
            <Grid container spacing={0}>
                <Grid item xs={3}>
                    <TextFieldForm label="Documentary credit number" id="creditNo"/>
                </Grid>
                <Grid item xs={3}>
                    <DatePicker label="Documentary credit issue date" onDateSelected={onDateSelected}/>
                </Grid>
                <Grid item xs={3}>
                    <DatePicker label="Departure date - shipment date" onDateSelected={onDateSelected}/>
                </Grid>
                <Grid item xs={3}>
                    <TextFieldForm label="B/L. AWB number" id="awbNo"/>
                </Grid>


                <Grid item xs={3}>
                    <TextFieldForm label="FCR. PO receipt number" id="receiptNo"/>
                </Grid>
                <Grid item xs={3}>
                    <Dropdown labelOutside="Transportation mode*" selectWidth={width3Column} 
                        options={[
                            {label: '0', value: '0'},
                            {label: '1', value: '1'},
                            {label: '2', value: '2'},
                            {label: '3', value: '3'}
                        ]}/>
                </Grid>
                <Grid item xs={3}>
                    <Dropdown labelOutside="Carrier" selectWidth={width3Column} 
                        options={[
                            {label: '0', value: '0'},
                            {label: '1', value: '1'},
                            {label: '2', value: '2'},
                            {label: '3', value: '3'}
                        ]}/>
                </Grid>
                <Grid item xs={3}>
                    <TextFieldForm label="Vessel" id="vessel"/>
                </Grid>


                <Grid item xs={3}>
                    <TextFieldForm label="Flight number" id="flightNo"/>
                </Grid>
                <Grid item xs={3}>
                    <Dropdown labelOutside="Seaport / Airport of loading*" selectWidth={width3Column} 
                        options={[
                            {label: '0', value: '0'},
                            {label: '1', value: '1'},
                            {label: '2', value: '2'},
                            {label: '3', value: '3'}
                        ]}/>
                </Grid>
                <Grid item xs={3}>
                    <Dropdown labelOutside="Port of discharge*" selectWidth={width3Column} 
                        options={[
                            {label: '0', value: '0'},
                            {label: '1', value: '1'},
                            {label: '2', value: '2'},
                            {label: '3', value: '3'}
                        ]}/>
                </Grid>
                <Grid item xs={3}>
                    <TextFieldForm label="Country of origin*" id="countryOri"/>
                </Grid>


                <Grid item xs={2}>
                    <TextFieldForm label="PO number" id="poNum"/>
                </Grid>
                <Grid item xs={2}>
                    <Dropdown labelOutside="Incoterm" selectWidth={width2Column} 
                            options={[
                                {label: '0', value: '0'},
                                {label: '1', value: '1'},
                                {label: '2', value: '2'},
                                {label: '3', value: '3'}
                            ]}/>
                </Grid>
                <Grid item xs={2}>
                    <Dropdown labelOutside="Location name" selectWidth={width2Column} 
                            options={[
                                {label: '0', value: '0'},
                                {label: '1', value: '1'},
                                {label: '2', value: '2'},
                                {label: '3', value: '3'}
                            ]}/>
                </Grid>
                <Grid item xs={3}>
                    <Dropdown labelOutside="Final destination, if on carriage*" selectWidth={width3Column} 
                            options={[
                                {label: '0', value: '0'},
                                {label: '1', value: '1'},
                                {label: '2', value: '2'},
                                {label: '3', value: '3'}
                            ]}/>
                </Grid>
                <Grid item xs={3}>
                    <Dropdown labelOutside="Tenor" selectWidth={width3Column} 
                            options={[
                                {label: '0', value: '0'},
                                {label: '1', value: '1'},
                                {label: '2', value: '2'},
                                {label: '3', value: '3'}
                            ]}/>
                </Grid>



                <Grid item xs={2}>
                    <Dropdown labelOutside="Currency code" selectWidth={width2Column} 
                            options={[
                                {label: '0', value: '0'},
                                {label: '1', value: '1'},
                                {label: '2', value: '2'},
                                {label: '3', value: '3'}
                            ]}/>
                </Grid>
                <Grid item xs={2}>
                    <TextFieldForm label="Amount" id="poNum"/>
                </Grid>
                <Grid item xs={3}>
                    <Dropdown labelOutside="Exporter reference / invoice no." selectWidth={width3Column} 
                            options={[
                                {label: '0', value: '0'},
                                {label: '1', value: '1'},
                                {label: '2', value: '2'},
                                {label: '3', value: '3'}
                            ]}/>
                </Grid>
                <Grid item xs={3}>
                    <Dropdown labelOutside="Brief description of goods*" selectWidth={width3Column} 
                            options={[
                                {label: '0', value: '0'},
                                {label: '1', value: '1'},
                                {label: '2', value: '2'},
                                {label: '3', value: '3'}
                            ]}/>
                </Grid>
                <Grid item xs={2}>
                    <TextFieldForm label="Description of goods" id="goods"/>
                </Grid>


                <Grid item xs={6}>
                    <TextFieldForm label="Amount in words" id="amountWords"/>
                </Grid>
                <Grid item xs={3}>
                    <TextFieldForm label="Marks and number" id="markNo"/>
                </Grid>


                <Grid item xs={6}>
                    <TextArea label="General additional information" id="additional"/>
                </Grid>
                

            </Grid>
            

            


        </div>
    )    
}
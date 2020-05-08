import React, { useState } from 'react';
import { CDLModal2, ModalInformation, ModalContent, ModalFooter, ModalTitle, ModalDesc, ModalBtnList, ModalBtn, ModalAction, ModalActionExtraButton, ModalActionButton } from '@cdl/modal';
import CDLButton from '@cdl/button';
import Grid from '@material-ui/core/Grid';
import DropdownHeader from "components/Dropdown/DropdownHeader.js";
import TextArea from "components/TextArea/TextArea.js";
import CDLDataTable from '@cdl/data-table';
import IconButton from "components/IconButton/IconButton.js";
import ModalHeader from "components/Modal/ModalHeader.js";
import Icon from "components/Icon/Icon.js";
import TextFieldForm from "components/TextField/TextFieldForm.js";


const tableData = [{'invoiceNumber': 'nv-2020-0001', 
                    'invoiceDate':'14 Apr 2020', 
                    'packingListNumber':'PL-2020-0001',
                    'packingMode':'packingMode'}];

export default function InvoiceItemDetail(props) {
    const [open, setOpen] = useState(false);
    
    function addItem() {
        setOpen(true);
    }

    function close(){
        setOpen(false);
    }

    const handleChange = event => {
        console.log('handleChange');
    };

    return (
        <div>
            <CDLModal2
                ariaLabelledby="modal-heading"
                classname="myClass"
                height={500}
                isOpen={props.isOpen}
                width={946}
            >
                <ModalHeader hasTopLine >
                    <ModalTitle>Invoice item(s)</ModalTitle>
                    <ModalBtnList>
                        <ModalBtn name="delete" title="close" onClick={props.close}/>
                    </ModalBtnList>
                    
                </ModalHeader>
                <ModalContent>
                    <Grid container spacing={0}>
                        <Grid item xs={10}>
                            
                        </Grid>
                        <Grid item xs={2}>
                            <div style={{float: 'right'}}>                 
                                <IconButton onClick={addItem} name="add">Add new item</IconButton>
                            </div>
                        </Grid>
                        <Grid item xs={12} style={{padding: '20px 0'}}>
                        <CDLDataTable maxRows={5} showPagination={false} defaultPageSizeOption={{'value':'1'}}
                    data={tableData}                    
                    columns={[
                      {
                        Header: <DropdownHeader options={['Case no','Carton no']} width={'110px'}/>,
                        accessor: 'invoiceNumber',
                        sortable: false
                      },
                      {
                        Header: <DropdownHeader options={['Prod. code','Carton no']} width='110px'/>,
                        accessor: 'invoiceDate',
                        sortable: false
                      },
                      {
                        Header: <DropdownHeader options={['Product description','Carton no']} />,
                        accessor: 'packingListNumber',
                        sortable: false
                      },
                      {
                        Header: <DropdownHeader options={['Quantity','Carton no']} />,
                        accessor: 'packingMode',
                        sortable: false
                      },
                      {
                        Header: 'Unit price',
                        accessor: 'accountNumber',
                        sortable: false
                      },
                      {
                        Header: 'Amount',
                        accessor: 'packingMode',
                        sortable: false
                      },
                      {
                        Header: 'Action',
                        accessor: 'packingMode',
                        sortable: false
                      }
                    ]}
                    
                  />
                        </Grid>

                        <Grid item xs={4}>
                            
                        </Grid>
                        <Grid item xs={4} style={{float: 'right'}}>
                            <TextFieldForm label="Total quantity" inline right/>
                        </Grid>
                        <Grid item xs={4} style={{float: 'right'}}>
                            <TextFieldForm label="Sub total" inline right/>
                        </Grid>

                        <Grid item xs={4}>
                            
                        </Grid>
                        <Grid item xs={5} style={{float: 'right'}}>
                            <TextFieldForm  inline right id="quantity1"/>
                        </Grid>
                        <Grid item xs={3} style={{float: 'right'}}>
                            <TextFieldForm  inline right id="amount1"/>
                        </Grid>

                        <Grid item xs={6}>
                            
                        </Grid>
                        <Grid item xs={3} justify="flex-end">
                            Invoice total <Icon name="circle-help-solid"/>
                        </Grid>
                        <Grid item xs={3} style={{textAlign: 'right'}}>
                            0.00
                        </Grid>

                        <Grid item xs={12}>
                            <TextArea label="Amount in words" fullWidth/>
                        </Grid>
                    </Grid>
                </ModalContent>
                <ModalFooter hasBottomLine>
                    <ModalAction>
                        <ModalActionExtraButton>
                            <CDLButton onClick={props.close}>Cancel</CDLButton>
                        </ModalActionExtraButton>
                        <ModalActionButton>
                            <CDLButton themeColor="primary">Save</CDLButton>
                        </ModalActionButton>
                    </ModalAction>
                </ModalFooter>
            </CDLModal2>
        </div>
    )
}
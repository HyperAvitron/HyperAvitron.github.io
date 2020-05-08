import React, { useState } from 'react';
import CDLDataTable from '@cdl/data-table';
import Grid from '@material-ui/core/Grid';
import InvoiceDetail from "views/Popup/InvoiceDetail.js";
import InvoiceItemDetail from "views/Popup/InvoiceItemDetail.js";
import IconButton from "components/IconButton/IconButton.js";
import CDLButton from '@cdl/button';



const tableData = [{'invoiceNumber': 'nv-2020-0001', 
                    'invoiceDate':'14 Apr 2020', 
                    'packingListNumber':'PL-2020-0001',
                    'packingMode':'packingMode'}];

export default function InvoiceSection(props) {
    const [open, setOpen] = useState(false);
    const [openDetail, setOpenDetail] = useState(false);

    function addInvoice() {
        setOpen(true);
    }

    function close(){
        setOpen(false);
    }

    function openItemDetail() {
      setOpenDetail(true);
    }

    function closeItemDetail(){
      setOpenDetail(false);
    }

    return (
        <div>
            
            <Grid container spacing={0}>
                <Grid item xs={10}></Grid>
                <Grid item xs={2} >   
                    <div className="rightBtn">                 
                        <IconButton onClick={addInvoice} name="add">Add new invoice</IconButton>
                    </div>
                </Grid>
            </Grid>
            <Grid container spacing={0} style={{paddingRight:'20px'}}>
                
            <Grid item xs={12}>
                <CDLDataTable maxRows={5} showPagination={false} defaultPageSizeOption={{'value':'1'}}
                    data={tableData}
                    columns={[
                      {
                        Header: 'Invoice number',
                        accessor: 'invoiceNumber'
                      },
                      {
                        Header: 'Invoice date',
                        accessor: 'invoiceDate'
                      },
                      {
                        Header: 'Packing list number',
                        accessor: 'packingListNumber',
                        maxWidth: 250
                      },
                      {
                        Header: 'Packing mode',
                        accessor: 'packingMode'
                      },
                      {
                        Header: 'Action',
                        accessor: 'accountNumber',
                        maxWidth: 250,
                        Cell: <CDLButton onClick={openItemDetail} 
                        plain>Detail</CDLButton>
                      }
                    ]}
                    
                  />
                </Grid>


                
                

            </Grid>
            

            <InvoiceDetail isOpen={open} close={close}/>
            <InvoiceItemDetail isOpen={openDetail} close={closeItemDetail}/>


        </div>
    )    
}
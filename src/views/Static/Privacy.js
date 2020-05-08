import React from 'react';
import Page from "components/Page/Page.js";
import EditableHeader from "components/EditableHeader/EditableHeader.js";
import CDLDataTable from '@cdl/data-table';
import Autocomplete from "components/Autocomplete/Autocomplete.js";
import CDLDropdown from '@cdl/dropdown-legacy';
import DropdownHeader from "components/Dropdown/DropdownHeader.js";

const tableData = [{'invoiceNumber': 'nv-2020-0001', 
                    'invoiceDate':'14 Apr 2020', 
                    'packingListNumber':'PL-2020-0001',
                    'packingMode':'packingMode'}];

export default function PrivacyPage(props) {
    const handleChange = event => {
        console.log('handleChange');
    };

    return (
        <Page title="Privacy and security" noNav>
            <div className="mainContent">
                
            <CDLDataTable maxRows={5} showPagination={false} defaultPageSize={1}
                    data={tableData}
                    columns={[
                      {
                        Header: <EditableHeader labelId="demo-customized-select-label"
                        id="demo-customized-select"
                        onChange={handleChange}/>,
                        accessor: 'invoiceNumber',
                        sortable: false
                      },
                      {
                        Header: <Autocomplete id="exporterCode" options={[
                            'Papaya',
                            'Persimmon',
                            'Paw Paw',
                            'Prickly Pear',
                            'Peach',
                            'Pomegranate',
                            'Pineapple'
                          ]} />,
                        accessor: 'invoiceDate'
                      },
                      {
                        Header: <DropdownHeader
                        options={[
                            {label: '0', value: '0'},
                            {label: '1', value: '1'},
                            {label: '2', value: '2'},
                            {label: '3', value: '3'}
                        ]} id="testing"/>,
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
                        maxWidth: 250
                      }
                    ]}
                    
                  />


                        <DropdownHeader
                        options={[
                            {label: '0', value: '0'},
                            {label: '1', value: '1'},
                            {label: '2', value: '2'},
                            {label: '3', value: '3'}
                        ]}/>

            </div>
            
        </Page>
    )
}
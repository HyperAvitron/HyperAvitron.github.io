import React from 'react';
import { CDLModal2, ModalInformation, ModalContent, ModalFooter, ModalTitle, ModalDesc, ModalBtnList, ModalBtn, ModalAction, ModalActionExtraButton, ModalActionButton } from '@cdl/modal';
import CDLButton from '@cdl/button';
import Grid from '@material-ui/core/Grid';
import TextFieldForm from "components/TextField/TextFieldForm.js";
import DatePicker from "components/DatePicker/DatePicker.js";
import Autocomplete from "components/Autocomplete/Autocomplete.js";
import TextArea from "components/TextArea/TextArea.js";
import ModalHeader from "components/Modal/ModalHeader.js";

export default function InvoiceDetail(props) {

    return (
        <div>
            <CDLModal2
                ariaLabelledby="modal-heading"
                classname="myClass"
                height={500}
                isOpen={props.isOpen}
                width={946}
            >
                <ModalHeader hasTopLine>
                    <ModalTitle>Invoice details</ModalTitle>
                    <ModalBtnList>
                        <ModalBtn name="delete" title="close" onClick={props.close}/>
                    </ModalBtnList>
                    
                </ModalHeader>
                <ModalContent>
                    <Grid container spacing={0}>
                        <Grid item xs={4}>
                            <TextFieldForm label="Invoice number*" />
                        </Grid>
                        <Grid item xs={4}>
                            <DatePicker label="Invoice date*" id="invDate"/>
                        </Grid>
                    </Grid>
                    <Grid container spacing={0}>
                        <Grid item xs={4}>
                            <Autocomplete label="Packing list number" id="invDate"/>
                        </Grid>
                        <Grid item xs={4}>
                            <TextFieldForm label="Packing mode" />
                        </Grid>
                        <Grid item xs={4}>
                            <Autocomplete label="Qty/Weight UOM" id="qtyUOM"/>
                        </Grid>
                        <Grid item xs={8}>
                            <TextArea label="Goods description" />
                        </Grid>
                        <Grid item xs={8}>
                            <TextArea label="Remarks" />
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
import React from 'react';
import Heading from "components/Heading/Heading.js";
import Dropdown from "components/Dropdown/Dropdown.js";
import Divider from "components/Divider/Divider.js";
import TextArea from "components/TextArea/TextArea.js";
import { Section, Row, Column, Paragraph, Separator} from '@cdl/layout';
import Grid from '@material-ui/core/Grid';

class DropdownCommon extends React.Component {
    render() {
      return (
          <Dropdown labelOutside={this.props.labelOutside} selectWidth={135} className="paddingR"
          options={[
              {label: '0', value: '0'},
              {label: '1', value: '1'},
              {label: '2', value: '2'},
              {label: '3', value: '3'}
          ]}/>
      );
    }
  }

export default function CommonSection(props) {
    return (
        <div>
            <Heading level={2} brandbar><span className="medium">Decimal places masking</span></Heading>
            <div style={{paddingBottom:'10px'}}>Decimal places categories*</div>

                
            <DropdownCommon labelOutside="Unit price" />
            <DropdownCommon labelOutside="Amount" />
            <DropdownCommon labelOutside="Quantity" />
            <DropdownCommon labelOutside="No. of packages" />
            <DropdownCommon labelOutside="Gross mass" />
            <DropdownCommon labelOutside="Net mass" />
            <DropdownCommon labelOutside="Cubic mass" />
            <DropdownCommon labelOutside="Interest rate" />

            <Divider />

            <Heading level={2} brandbar><span className="medium">General remarks</span></Heading>

            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <TextArea label="Remarks (Applicable to all invoices)" />
                </Grid>
                <Grid item xs={6}>
                    <TextArea label="Remarks (Applicable to all invoices)" />
                </Grid>
                <Grid item xs={6}>
                    <TextArea label="Remarks (Applicable to all invoices)" />
                </Grid>
                <Grid item xs={6}>
                    <TextArea label="Remarks (Applicable to all invoices)" />
                </Grid>
            </Grid>


            <Divider />

            <Heading level={2} brandbar><span className="medium">Master document version details</span></Heading>
        
            <Row>
                <Column size={2}>
                    Version number<br/>1.0
                    
                </Column>
                <Column size={2}>
                    Status<br/>PENDING
                    
                </Column>
                <Column size={2}>
                    Approval user name<br/>-
                    
                </Column>
                <Column size={2}>
                    Approval time<br/>-
                    
                </Column>
                <Column size={2}>
                    Approval date<br/>-
                    
                </Column>
                
            </Row>
        </div>
    )
}
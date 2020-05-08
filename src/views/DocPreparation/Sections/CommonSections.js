import React from 'react';
import CommonSection from "views/DocPreparation/Sections/Common.js";
import ExporterDetails from "views/DocPreparation/Sections/ExporterDetails.js";
import Bank from "views/DocPreparation/Sections/Bank.js";
import Other from "views/DocPreparation/Sections/Other.js";
import Collapsible from "components/Collapsible/Collapsible.js";

export default function CommonSections(props) {
    return (
        <div>
            <Collapsible label="1. Common" className="collapsible">                
                <CommonSection />       
            </Collapsible>

            <Collapsible label="2. Exporter / importer details" status="Complete" className="collapsible">
                <ExporterDetails />
            </Collapsible>


            <Collapsible label="3. Bank / agent / consignee" className="collapsible">
                <Bank />
            </Collapsible>
            
            <Collapsible label="4. Other information" className="collapsible">
                <Other />
            </Collapsible>
        </div>
    )
}
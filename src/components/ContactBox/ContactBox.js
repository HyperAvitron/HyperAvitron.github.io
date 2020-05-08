import React from 'react';
import Parser from 'html-react-parser';

import CDLIcon, { iconNames }  from '@cdl/icon';

export default function ContactBox(props) {
    const emails = props.emails;
    const phones = props.phones;
    let phoneStr = "";
    if(phones){
        phones.forEach(phone => {
            phoneStr += '<span class="contactInfo">'+ phone +'</span><br/>';
        });
    }
    
    return (
        <div className="contactBox">
            <div style={{paddingBottom: '5px'}}>{props.title}</div>
            {emails &&
                <div>
                    <CDLIcon name="message" /><span className="contactInfo">{emails}</span>
                </div>
            }

            {phones &&
                <div>
                    <div className="inline"><CDLIcon name="phone" /></div>
                    <div className="inline">{Parser(phoneStr)}</div>
                </div>
            }
        </div>
    )
}
import React from 'react';

import CDLTextField  from '@cdl/text-field';



export default function TextField(props) {
    let labelCls = "horizontalLabel";
    if(props.longLabel){
        labelCls += " longLabel";
    }
    return (
        <div className={props.className}>
            <label className={labelCls}>{props.labelCustom}</label>
            <CDLTextField {...props} />
        </div>
    )
}
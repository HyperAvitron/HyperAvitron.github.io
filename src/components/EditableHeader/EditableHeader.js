import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CDLIcon from "@cdl/icon";
import CDLTextField  from '@cdl/text-field';
import styled from "styled-components";
import Icon from "components/Icon/Icon.js";
import Select from '@material-ui/core/Select';
import { makeStyles, withStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import MenuItem from "@material-ui/core/MenuItem";
import NativeSelect from "@material-ui/core/NativeSelect";
import { red } from '@material-ui/core/colors';


const BootstrapInput = withStyles(theme => ({
    root: {
      "label + &": {
        marginTop: theme.spacing(3)
      }
    },
    input: {
      position: "relative",
      backgroundColor: theme.palette.background.paper,
      border: "1px solid #ced4da",
      fontSize: 12,
      padding: "10px 26px 10px 12px",
      transition: theme.transitions.create(["border-color", "box-shadow"]),
      width: 80,
    }
  }))(InputBase);

const useStyles = theme => ({
    option: {
      borderBottom: '1px solid black',
      color: 'black',
      height: 30,
      padding: '5px',
    },

    selectEmpty: {
        marginTop: theme.spacing(2)
      },


});






class EditableHeader extends Component {
    
    render() {
        const { classes } = this.props;
        let icon =''; 
        
        return (
            <Select 
                {...this.props}
                input={<BootstrapInput />}
                IconComponent = {() => (<CDLIcon className='MuiSvgIcon-root MuiSelect-icon' name='edit'/>)}
                >
                <MenuItem value={10} className={classes.option}>Ten</MenuItem>
                <MenuItem value={20} className={classes.selectMenu}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
        )
    }
}

export default withStyles(useStyles)(EditableHeader)
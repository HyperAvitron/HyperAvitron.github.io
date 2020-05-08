import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CDLIcon from "@cdl/icon";
import CDLTextField  from '@cdl/text-field';
import styled from "styled-components";
import Icon from "components/Icon/Icon.js";

const ButtonEditMode = styled.button`
    height: 22px;
    position: relative;
    border: none;
    background: white;
    left: -42px;
    top: 5px;
    padding: 0 10px;
    outline: none;
    border-left: 1px solid #767676;
    width: 40px;
`;

const Button = styled.button`
    height: 22px;
    position: relative;
    border: none;
    background: none;
    padding: 0 10px;
    outline: none;
    width: 40px;
    top: -3px;
`;

const Container = styled.div`
    display: flex;
    position: relative;
    width: ${props => props.width ? props.width : '100%'};
    justify-content: space-between;


    #${props => props.containerId} {
        width: calc(100% + 18px);
    }

    & .option-active{
        background-color: #f1f1f1;
    }

    &:focus{
        outline: none;
    }
`;

const Input = styled.input`
    box-sizing: border-box;
    height: 30px;
    width: ${props => props.width ? props.width : '100%'};
    outline: none;
    font-family:HSBC-Universe-Medium;

    &:focus{
        outline: none;
    }
`;

const Label = styled.div`
    width: calc(${props => props.width ? props.width : '100%'} - 30px);
`;

const Item = styled.div`
    padding: 8px 10px;
    cursor: pointer;
    background-color: #fff;
    border-bottom: 1px solid #d4d4d4;
    font-size: 12px;
    color: black;
`;

const ItemList = styled.div`
    position: absolute;
    border: 1px solid #929292;
    border-bottom: none;
    border-top: none;
    z-index: 101;
    top: 31px;
    left: 0;
    right: 0;
    width: calc(100% - 40px);
    max-height: 200px;
    overflow: auto;

    & ${Item}:hover{
        background-color: #f1f1f1;
    }
`;





export default class DropdownHeader extends Component {


  static propTypes = {
    options: PropTypes.instanceOf(Array).isRequired
  };
  state = {
    activeOption: 0,
    filteredOptions: [],
    showOptions: false,
    userInput: this.props.options[0].label ? this.props.options[0].label : this.props.options[0]
  };


  onChange = (e) => {

    const { options } = this.props;
    const userInput = e.currentTarget.value;

    const filteredOptions = options.filter((item) => {
      let text;
      if(typeof item === 'object'){
         text = item.label;
      }else{
         text = item;
      }
  
      return text.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    });

    if(filteredOptions.length>0){
      this.setState({
        activeOption: 0,
        filteredOptions,
        showOptions: true,
        userInput: e.currentTarget.value
      });
    }else{
      this.setState({
        showOptions: false,
        userInput: e.currentTarget.value
      });
    }

    
  };

  onClick = (e) => {
    this.setState({
      activeOption: 0,
      filteredOptions: [],
      showOptions: false,
      userInput: e.currentTarget.innerText
    });
  };

  onButtonClick = (e) => {

    this.setState({
      activeOption: 0,
      filteredOptions: this.props.options,
      showOptions: !this.state.showOptions,
      userSelect: true
    });
  };

  onKeyDown = (e) => {
    const { activeOption, filteredOptions } = this.state;

    if (e.keyCode === 13) {
      this.setState({
        activeOption: 0,
        showOptions: false,
        userInput: filteredOptions[activeOption]
      });
    } else if (e.keyCode === 38) {
      if (activeOption === 0) {
        return;
      }
      this.setState({ activeOption: activeOption - 1 });
    } else if (e.keyCode === 40) {
      if (activeOption === filteredOptions.length - 1) {
        console.log(activeOption);
        return;
      }
      this.setState({ activeOption: activeOption + 1 });
    }
  };

  onBlur = (e) => {
    this.setState({
      showOptions: false
    });
  };

  render() {
    const {
      onChange,
      onClick,
      onKeyDown,
      onButtonClick,
      onBlur,
      state: { activeOption, filteredOptions, showOptions, userInput, userSelect }
    } = this;

    let optionList;

    let icon, textField, button;
    if(showOptions){
        icon = <CDLIcon name='edit' size={18}/>;
        textField = <Input type="text"
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                    onBlur={onBlur}
                    value={userInput}
                    {...this.props}
                    readOnly
                />;
        button = (<ButtonEditMode ref={(el) => this.instance = el } title="Open" type="button" onClick={onButtonClick}>
                    {icon}
                </ButtonEditMode>);
    }else{
        icon = <Icon name='edit' size={18}/>;
        textField = (<Label width={this.props.width}>{userInput}</Label>);
        button = (<div><Button ref={(el) => this.instance = el } title="Open" type="button" onClick={onButtonClick}>
                    {icon}
                </Button></div>);
    }

    if (showOptions && (userInput || userSelect)) {
        
      if (filteredOptions && filteredOptions.length) {
        const items = filteredOptions.map((option, index) => {

            let label, val;
              if(typeof option === 'object'){
                label = option.label;
                val = option.value;
              }else{
                label = option;
                val = option;
              }
              let className;
              if (index === activeOption) {
                className = 'option-active';
              }

            return (
            <Item className={className} key={val} onClick={onClick}>
                {label}
            </Item>)
        }
        );

        optionList = (
          <ItemList> 
            {items}
          </ItemList>
        );
      } 
    }
    

    return (
      <Container containerId={this.props.id} >
          {textField}
          {button}
          {optionList}
      </Container>
    );
  }
}



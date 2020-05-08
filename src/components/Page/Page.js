import React from 'react';

import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";

export default class Page extends React.Component {
    render() {
      return (
        <div className="App">
            <Header {...this.props}/>
                {this.props.children}
            <Footer {...this.props}/>
        </div>
      );
    }
  }
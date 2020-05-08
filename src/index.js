import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from "history";

import LoginPage from "views/LoginPage/LoginPage.js";
import HomePage from "./views/HomePage/HomePage.js";
import PasswordPage from "./views/PasswordPage/PasswordPage.js";
import LogoutPage from "./views/LogoutPage/LogoutPage.js";
import MasterDocument from "./views/DocPreparation/MasterDocument.js";
import Invoice from "./views/DocPreparation/Invoice.js";
import PrivacyPage from "views/Static/Privacy.js";


var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/Login" component={LoginPage} />
      <Route path="/Logout" component={LogoutPage} />
      <Route path="/Home" component={HomePage} />  
      <Route path="/ChangePWD" component={PasswordPage} /> 
      <Route path="/Doc/Invoice" component={Invoice} />   
      <Route path="/Doc" component={MasterDocument} />    
      <Route path="/Privacy" component={PrivacyPage} />
      
      <Route path="/" component={LoginPage} />
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

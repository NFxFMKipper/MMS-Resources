import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListCustomersComponent from './components/ListCustomersComponent';
import CreateCustomerComponent from './components/CreateCustomerComponent';

function App() {
  return (
    <div>
      <Router>
          <HeaderComponent />
            <div className="container">
              <Switch>
                <Route path="/" exact component = {ListCustomersComponent}></Route>
                <Route path="/customers" component = {ListCustomersComponent}></Route>
                <Route path="/add-customers" component = {CreateCustomerComponent}></Route>
              </Switch>
            </div>
          <FooterComponent />
      </Router>
    </div>
  );
}

export default App;

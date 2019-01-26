import React, { Component } from 'react';
import Contacts from './components/contacts/Contacts';
import Header from './components/Layout/Header';
import About from './components/Pages/About';
import NotFound from './components/Pages/NotFound';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// context api Provider
//import { Provider } from './context';

// Redux Provider
import { Provider } from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header branding="Contact Manager" />

            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/contact/add" component={AddContact} />
                <Route exact path="/contact/edit/:id" component={EditContact} />
                <Route exact path="/about" component={About} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

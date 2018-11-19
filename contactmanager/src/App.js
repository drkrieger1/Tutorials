import React, { Component } from 'react';
import Contact from './components/Contact';
import Header from './components/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager" />

        <Contact name="John Doe" email="jdoe@mail.com" phone="555-555-555" />

        <Contact name="Jane Doe" email="janedoe@mail.com" phone="555-777-888" />
      </div>
    );
  }
}

export default App;

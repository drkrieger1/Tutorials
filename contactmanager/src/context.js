import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case 'ADD_CONTACT':
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };

    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: 'Bil Smith',
        email: 'bsmith@mail.com',
        phone: '321-343-8756'
      },
      {
        id: 2,
        name: 'Anne Jones',
        email: 'ajones@mail.com',
        phone: '321-343-8756'
      },
      {
        id: 3,
        name: 'Randy Hill',
        email: 'rhill@mail.com',
        phone: '123-433-7788'
      }
    ],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;

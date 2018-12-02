import React, { Component } from 'react';
import { Consumer } from '../../context';
import TextInputGroup from '../Layout/TextInputGroup';
import uuid from 'uuid';

class AddContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: ''
    };
    this.handleChange.bind(this);
    this.onSubmit.bind(this);
  }

  handleChange(name, value) {
    console.log(name, value);
    this.setState({ [name]: value });
  }

  onSubmit(event, dispatch) {
    event.preventDefault();
    const { name, email, phone } = this.state;
    const newContact = {
      id: uuid(),
      name,
      email,
      phone
    };

    dispatch({ type: 'ADD_CONTACT', payload: newContact });
    console.log('Contact submitted');

    this.setState({
      name: '',
      email: '',
      phone: ''
    });
  }
  render() {
    const { name, email, phone } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={e => this.onSubmit(e, dispatch)}>
                  <TextInputGroup
                    label="Name"
                    name="name"
                    placeholder="Enter Name"
                    value={name}
                    onChange={e => {
                      this.handleChange('name', e.target.value);
                    }}
                  />
                  <TextInputGroup
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={e => {
                      this.handleChange('email', e.target.value);
                    }}
                  />
                  <TextInputGroup
                    label="Phone"
                    name="phone"
                    placeholder="Enter phone"
                    value={phone}
                    onChange={e => {
                      this.handleChange('phone', e.target.value);
                    }}
                  />
                  <input
                    type="submit"
                    value="Add Contact"
                    className="btn btn-light btn-block"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;

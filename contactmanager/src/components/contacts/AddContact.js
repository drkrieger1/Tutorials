import React, { Component } from 'react';
import { Consumer } from '../../context';
import TextInputGroup from '../Layout/TextInputGroup';
//import uuid from 'uuid';
import axios from 'axios';

class AddContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      errors: {}
    };
    this.handleChange.bind(this);
    this.onSubmit.bind(this);
  }

  handleChange(name, value) {
    this.setState({ [name]: value });
  }

  onSubmit(event, dispatch) {
    event.preventDefault();
    const { name, email, phone } = this.state;

    //Check errors
    if (name === '') {
      this.setState({ errors: { name: 'Name is requierd' } });
      return;
    }
    if (email === '') {
      this.setState({ errors: { email: 'email is requierd' } });
      return;
    }
    if (phone === '') {
      this.setState({ errors: { name: 'phone is requierd' } });
      return;
    }

    const newContact = {
      name,
      email,
      phone
    };

    axios
      .post('https://jsonplaceholder.typicode.com/users', newContact)
      .then(res =>
        res.status === 201
          ? dispatch({ type: 'ADD_CONTACT', payload: res.data })
          : alert(`Error: ${res.status}`)
      );

    //Clear state
    this.setState({
      name: '',
      email: '',
      phone: '',
      errors: {}
    });

    this.props.history.push('/');
  }

  render() {
    const { name, email, phone, errors } = this.state;

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
                    error={errors.name}
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
                    error={errors.email}
                  />
                  <TextInputGroup
                    label="Phone"
                    name="phone"
                    placeholder="Enter phone"
                    value={phone}
                    onChange={e => {
                      this.handleChange('phone', e.target.value);
                    }}
                    error={errors.phone}
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

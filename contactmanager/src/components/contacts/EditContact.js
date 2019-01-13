import React, { Component } from 'react';
import { Consumer } from '../../context';
import TextInputGroup from '../Layout/TextInputGroup';
//import uuid from 'uuid';
import axios from 'axios';

class EditContact extends Component {
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

  //aync exmaple
  async componentDidMount() {
    //expract id from the the url
    const { id } = this.props.match.params;
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );

    const contact = res.data;

    this.setState({
      name: contact.name,
      email: contact.email,
      phone: contact.phone
    });
  }

  handleChange(name, value) {
    console.log(name, value);
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
              <div className="card-header">Edit Contact</div>
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
                    value="Update Contact"
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

export default EditContact;

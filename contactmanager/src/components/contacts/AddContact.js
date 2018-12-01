import React, { Component } from 'react';

class AddContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: ''
    };
    this.handleChange.bind(this);
  }

  handleChange(name, value) {
    let tempState = this.state;
    tempState[name] = value;

    this.setState({ [name]: value });
  }

  onSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }
  render() {
    const { name, email, phone } = this.state;
    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form onSubmit={e => this.onSubmit(e)}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Name.."
                value={name}
                onChange={e => {
                  this.handleChange('name', e.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control form-control-lg"
                placeholder="Enter Email.."
                value={email}
                onChange={e => {
                  this.handleChange('email', e.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="Phone">Phone</label>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Phone.."
                value={phone}
                onChange={e => {
                  this.handleChange('phone', e.target.value);
                }}
              />
            </div>
            <input
              type="submit"
              value="Add Contact"
              className="btn btn-light btn-block"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default AddContact;

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {
  constructor(props) {
    super();

    this.state = {
      showInfo: false
    };
  }
  handleClick() {
    this.setState({ showInfo: !this.state.showInfo });
  }

  onDeleteClick() {
    this.props.deleteHandler();
  }

  render() {
    const { showInfo } = this.state;

    return (
      <div className="card card-body mb-3">
        <h4>
          <i
            onClick={this.handleClick.bind(this)}
            className={
              showInfo ? 'fas fa-sort-up mr-2' : 'fas fa-sort-down mr-2'
            }
            style={{ cursor: 'pointer' }}
          />
          {this.props.name}
          <i
            onClick={this.onDeleteClick.bind(this)}
            className="fas fa-times"
            style={{ cursor: 'pointer', float: 'right', color: 'red' }}
          />
        </h4>
        {showInfo ? (
          <ul className="list-group">
            <li className="list-group-item">Email: {this.props.email}</li>
            <li className="list-group-item">Phone: {this.props.phone}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

//Typechecking
Contact.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string
};
export default Contact;

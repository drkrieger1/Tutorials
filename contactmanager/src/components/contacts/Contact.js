import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../../context';
import axios from 'axios';
import { Link } from 'react-router-dom';

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

  onDeleteClick(id, dispatch) {
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res =>
        res.status === 200
          ? dispatch({ type: 'DELETE_CONTACT', payload: id })
          : alert(`Error: ${res.status}`)
      );
  }

  render() {
    const { showInfo } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
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
                  className="fas fa-times"
                  style={{ cursor: 'pointer', float: 'right', color: 'red' }}
                  onClick={this.onDeleteClick.bind(
                    this,
                    this.props.id,
                    dispatch
                  )}
                />
                <Link to={`contact/edit/${this.props.id}`}>
                  <i
                    className="fas fa-pencil-alt"
                    style={{
                      cursor: 'pointer',
                      float: 'right',
                      color: 'black',
                      marginRight: '1rem'
                    }}
                  />
                </Link>
              </h4>
              {showInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email: {this.props.email}</li>
                  <li className="list-group-item">Phone: {this.props.phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
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

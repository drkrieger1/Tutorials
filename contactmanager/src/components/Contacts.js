import React, { Component } from 'react';
import Contact from './Contact';
class Contacts extends Component {
  constructor() {
    super();
    this.state = {
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
      ]
    };
  }
  deleteContact = id => {
    const { contacts } = this.state;
    const filtered = contacts.filter(contact => contact.id !== id);

    this.setState({ contacts: filtered });
  };
  render() {
    const { contacts } = this.state;
    return (
      //Fragment is a sudo element to replace un-wanted divs
      <React.Fragment>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            name={contact.name}
            email={contact.email}
            phone={contact.phone}
            deleteHandler={this.deleteContact.bind(this, contact.id)}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;

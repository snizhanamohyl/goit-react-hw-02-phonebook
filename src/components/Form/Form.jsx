import { Component } from "react";
import { nanoid } from 'nanoid';

export default class Form extends Component {
  state = {
    name: "",
    number: "",
  }

  onChange = ({target}) => {
    this.setState({[target.name]:target.value})
  }

  resetForm = () => {
    this.setState({    name: '',
    number: '',});
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { addContact, contacts} = this.props;

    if (contacts.find(contact => contact.name === this.state.name)) {
      alert(`${this.state.name} is already in contacts.`);
      return;
    };

    addContact({...this.state, id: nanoid() });
    this.resetForm();
  }
  
  render() {
    const { name, number } = this.state;

      return (
        <form onSubmit={ this.onSubmit}>
          <label>
          Name
          <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
              onChange={this.onChange}
      />
          </label>
          <label>Phone<input
  type="tel"
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
             onChange={this.onChange}
/></label>
          <button type="submit">Add contact</button>
        </form>
        );
  }
};
import React, { Component } from 'react';
import './ContactForm.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;
    this.props.onSubmit(name, number);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className="item_form" onSubmit={this.handleSubmit}>
        <label className="label-data">
          Name
          <input
            className="item-input"
            type="text"
            name="name"
            required
            placeholder="Annie Copeland"
            value={name}
            onChange={this.handleChange}
          />
        </label>
        <label className="label-data">
          Phone
          <input
            className="item-input"
            type="text"
            name="number"
            required
            placeholder="111-11-11"
            value={number}
            onChange={this.handleChange}
          />
        </label>
        <button
          className="btn_submit"
          type="submit"
          disabled={name === '' || number === ''}
        >
          Save contact
        </button>
      </form>
    );
  }
}

export default ContactForm;

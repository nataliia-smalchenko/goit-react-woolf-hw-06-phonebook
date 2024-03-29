import Input from '../Input/Input';
import Button from '../Button/Button';
import { useState } from 'react';

const ContactForm = props => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    if (e.target.id === 'name') {
      setName(e.target.value);
    }
    if (e.target.id === 'number') {
      setNumber(e.target.value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (props.isNameExist(name)) {
      alert(`${name} is already in contacts`);
      return;
    }
    props.onSubmit({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        id="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        value={name}
        label="Name"
        onChange={handleChange}
      />
      <Input
        type="tel"
        id="number"
        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        value={number}
        label="Number"
        onChange={handleChange}
      />
      <Button type="submit" onClick={() => {}} text="add contact" />
    </form>
  );
};

export default ContactForm;

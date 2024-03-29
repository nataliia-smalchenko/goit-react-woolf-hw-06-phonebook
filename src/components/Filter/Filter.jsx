import Input from '../Input/Input';

const Filter = props => {
  return (
    <form onSubmit={props.onSubmit}>
      <Input
        type="text"
        id="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        value={props.filter}
        label="Find contacts by name"
        onChange={props.onChange}
      />
    </form>
  );
};

export default Filter;

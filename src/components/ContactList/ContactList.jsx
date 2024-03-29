import Button from '../Button/Button';
import css from './ContsctList.module.css';

const ContactList = props => {
  return (
    <ul className={css.list}>
      {props.list.map(item => {
        return (
          <li className={css.item} key={item.id}>
            <span className={css['item-text']}>
              {item.name}: {item.number}
            </span>
            <Button
              type="button"
              text="Delete"
              handleClick={() => props.onClick(item.id)}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;

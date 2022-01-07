import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//import PropTypes from 'prop-types';
import ContactsListItem from '../ContactsListItem';
import phonebookOperations from '../../redux/phonebook/phonebook-operations';
import { getVisibleContacts } from '../../redux/phonebook/phonebook-selectors';

function ContactsList() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(phonebookOperations.fetchContacts());
  }, [dispatch]);
  const deleteItem = id => dispatch(phonebookOperations.deleteContact(id));

  return (
    <ListGroup as="ol" numbered style={{ width: '300px' }}>
      {contacts.map(contact => {
        return (
          <ContactsListItem
            key={contact.id}
            contact={contact}
            onDelete={deleteItem}
          />
        );
      })}
    </ListGroup>
  );
}

// ContactsList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string,
//       phone: PropTypes.string,
//     }),
//   ),
//   onDelete: PropTypes.func,
// };

export default ContactsList;

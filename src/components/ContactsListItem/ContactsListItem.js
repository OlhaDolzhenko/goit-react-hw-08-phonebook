import PropTypes from 'prop-types';
import { ListGroup, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactsListItem = ({ contact, onDelete }) => {
  return (
    <ListGroup.Item
      as="li"
      className="d-flex justify-content-between align-items-start"
    >
      <div className="ms-2 me-auto">
        <div className="fw-bold">{contact.name}</div>
        {contact.number}
      </div>
      <Button
        type="button"
        variant="primary"
        size="sm"
        onClick={() => onDelete(contact.id)}
      >
        Delete
      </Button>
    </ListGroup.Item>
  );
};

ContactsListItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string,
      phone: PropTypes.string,
    }),
  ),
  onDelete: PropTypes.func,
};

export default ContactsListItem;

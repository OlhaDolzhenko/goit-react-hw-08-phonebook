import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Form, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import changeFilter from '../../redux/phonebook/phonebook-actions';
import { getFilter } from '../../redux/phonebook/phonebook-selectors';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  const change = e => dispatch(changeFilter(e.currentTarget.value));
  return (
    <Card style={{ width: '300px', marginBottom: '30px', marginTop: '30px' }}>
      <Card.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formGroupName">
            <Form.Label>Find contacts by name</Form.Label>
            <Form.Control type="text" value={value} onChange={change} />
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;

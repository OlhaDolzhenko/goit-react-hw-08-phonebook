import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Form, Button, Card, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import './RegisterView.module.css';

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const appAlert = text =>
    toast(text, {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const checkErrorType = error => {
    if (error.data.keyPattern) {
      if (error.data.keyPattern.email && error.data.keyPattern.email === 1) {
        return appAlert('This email address is already being used.');
      }
    }
    if (error.data.message) {
      return appAlert('Your password must be at least 7 characters long.');
    }
    appAlert('Please enter valid data.');
  };
  const signUp = async () => {
    try {
      const originalPromiseResult = await dispatch(
        authOperations.register({ name, email, password }),
      ).unwrap();
      return originalPromiseResult;
    } catch (rejectedValue) {
      console.log(rejectedValue.response);
      switch (rejectedValue.response.status) {
        case 400:
          return checkErrorType(rejectedValue.response);
        case 500:
          return appAlert('Registration failed.');
        default:
          return appAlert('Please enter valid data.');
      }
    }
  };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    signUp();
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1 className="title">Sign Up</h1>
      <Card style={{ width: '300px' }} className="custom-card">
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formGroupName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                name="name"
                value={name}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupName">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupNumber">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Container style={{ textAlign: 'center' }}>
              <Button type="submit">Sign up</Button>
            </Container>
          </Form>
        </Card.Body>
      </Card>
      <ToastContainer />
    </div>
  );
}

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Form, Button, Card, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import './LoginView.css';

export default function LoginView() {
  const dispatch = useDispatch();
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
  const logIn = async () => {
    try {
      const originalPromiseResult = await dispatch(
        authOperations.logIn({ email, password }),
      ).unwrap();
      return originalPromiseResult;
    } catch (rejectedValue) {
      switch (rejectedValue.response.status) {
        case 400:
          return appAlert('Wrong email or password.');
        default:
          return;
      }
    }
  };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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
    logIn();
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1 className="title">Log In</h1>
      <Card style={{ width: '300px' }} className="custom-card">
        <Card.Body>
          <Form onSubmit={handleSubmit}>
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
              <Button type="submit">Sign in</Button>
            </Container>
          </Form>
        </Card.Body>
      </Card>
      <ToastContainer />
    </div>
  );
}

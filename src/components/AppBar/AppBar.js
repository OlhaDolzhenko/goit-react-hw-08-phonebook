import { useSelector } from 'react-redux';
import { Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from '../Navigation';
import UserMenu from '../UserMenu';
import AuthNav from '../AuthNav';
import { authSelectors } from '../../redux/auth';
import './AppBar.module.css';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header className="header">
      <Navbar expand="lg" variant="light" bg="light" className="my-nav">
        <Navbar.Collapse className="justify-content-between">
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

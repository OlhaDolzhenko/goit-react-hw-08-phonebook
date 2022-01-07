import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import styles from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const email = useSelector(authSelectors.getUserEmail);
  const avatar = seed =>
    `https://avatars.dicebear.com/api/avataaars/${seed}.svg`;
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

  const logOut = async () => {
    try {
      const originalPromiseResult = await dispatch(
        authOperations.logOut(),
      ).unwrap();
      return originalPromiseResult;
    } catch (rejectedValue) {
      appAlert('Logout failed');
    }
  };

  return (
    <div className={styles.container}>
      <img
        src={avatar(Math.random())}
        alt=""
        width="32"
        className={styles.avatar}
      />
      <span className={styles.name}>{email}</span>
      <Button type="button" onClick={logOut} size="sm">
        Log Out
      </Button>
      <ToastContainer />
    </div>
  );
}

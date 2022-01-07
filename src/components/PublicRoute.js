import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { authSelectors } from '../redux/auth';

export default function PublicRoute({
  children,
  redirectTo = '/',
  restricted = false,
  ...routeProps
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return (
    <Route {...routeProps}>
      {shouldRedirect ? <Redirect to={redirectTo} /> : children}
    </Route>
  );
}

PublicRoute.propTypes = {
  redirectTo: PropTypes.string,
  children: PropTypes.node,
  restricted: PropTypes.bool,
  routeProps: PropTypes.node,
};

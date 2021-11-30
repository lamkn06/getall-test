import { Route, Redirect } from 'react-router-dom';

const RouterAuthenticator = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        true ? ( //userStore.isAuthenticator ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default RouterAuthenticator;

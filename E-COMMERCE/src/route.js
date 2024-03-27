//route.js
import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase/firebase';
import Register from './auth/register/register';
import Login from './auth/login/login';

// PrivateRoute component definition
function PrivateRoute({ children, ...rest }) {
  const [user, loading, error] = useAuthState(auth);

  if (loading) return <div>Loading...</div>; // Optionally handle loading state
  if (error) return <div>Error: {error}</div>; // Optionally handle error state
=======
import { Route, Redirect } from 'react-router-dom';
=======
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
>>>>>>> 6c72f09 (newcommit)
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase/firebase';
import Register from './auth/register/register';
import Login from './auth/login/login';

// PrivateRoute component definition
function PrivateRoute({ children, ...rest }) {
<<<<<<< HEAD
  const [user] = useAuthState(auth);
>>>>>>> 83d012c (newcommit)
=======
  const [user, loading, error] = useAuthState(auth);

  if (loading) return <div>Loading...</div>; // Optionally handle loading state
  if (error) return <div>Error: {error}</div>; // Optionally handle error state
>>>>>>> 6c72f09 (newcommit)

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect
            to={{
<<<<<<< HEAD
<<<<<<< HEAD
              pathname: '/login',
=======
              pathname: '/signin',
>>>>>>> 83d012c (newcommit)
=======
              pathname: '/login',
>>>>>>> 6c72f09 (newcommit)
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

<<<<<<< HEAD
<<<<<<< HEAD
// App component definition with routes setup
=======
>>>>>>> 83d012c (newcommit)
=======
// App component definition with routes setup
>>>>>>> 6c72f09 (newcommit)
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={() => <h1>Home</h1>} />
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 6c72f09 (newcommit)
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/dashboard">
          <h1>Dashboard (Protected)</h1>
        </PrivateRoute>
<<<<<<< HEAD
=======
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <PrivateRoute path="/signout" component={SignOut} />
>>>>>>> 83d012c (newcommit)
=======
>>>>>>> 6c72f09 (newcommit)
      </Switch>
    </Router>
  );
}

<<<<<<< HEAD
<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> 83d012c (newcommit)
=======
export default App;
>>>>>>> 6c72f09 (newcommit)

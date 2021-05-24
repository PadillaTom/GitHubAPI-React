import React from 'react';
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from '../../Pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Dashboard></Dashboard>
      <Login />
      <Error />
    </div>
  );
}

export default App;

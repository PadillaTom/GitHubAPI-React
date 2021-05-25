import React from 'react';
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from '../../Pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Dashboard></Dashboard>        
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>      
    </Router>
  );
}

export default App;

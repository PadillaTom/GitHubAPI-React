import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import {App} from './Components/App';

import { GithubProvider } from './Context/context';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

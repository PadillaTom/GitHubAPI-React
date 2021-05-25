import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import {App} from './Components/App';

import {GithubProvider} from "./Context/userContext";

ReactDOM.render(
  <GithubProvider>
    <App />
  </GithubProvider>,
  document.getElementById('root')
);

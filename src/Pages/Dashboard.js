import React from 'react';

import {Navbar} from "../Components/Navigation"
import {Search} from "../Components/Search"
import {User, Info, Repos} from "../Components/User Related";

const Dashboard = () => {
  return (
    <main>
      <Navbar></Navbar>
      <Search></Search>
      {/* User */}
      <Info></Info>
      <User></User>
      <Repos></Repos>



      
    </main>
  );
};

export default Dashboard;

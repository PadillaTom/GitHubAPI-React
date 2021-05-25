import React, { useState, useEffect, createContext} from 'react';
import axios from 'axios';

// *** Mock Data to prevent consumig API requests ***
import mockUser from "./mockData/mockUser";
import mockRepos from "./mockData/mockRepos";
import mockFollowers from "./mockData/mockFollowers";
//  *** END Mock Data ***

// API URL:
const rootUrl = 'https://api.github.com';



const GithubContext = createContext();

const GithubProvider = ({children}) => {
    // State:
    const [githubUser, setGithubUser] = useState(mockUser);
    const [repos, setRepos] = useState(mockRepos);
    const [followers, setFollowers] = useState(mockFollowers);

    return <GithubContext.Provider value={{githubUser, repos, followers}}>
        {children}
    </GithubContext.Provider>
}

export {GithubContext, GithubProvider};

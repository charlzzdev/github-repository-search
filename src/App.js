import React, { useState } from 'react';
import Header from './components/Header';
import Repository from './components/Repository';

const App = () => {
      const [repos, setRepos] = useState([]);
      const [loading, setLoading] = useState(false);

      async function fetchRepos(query) {
            setLoading(true);
            await fetch(`https://api.github.com/search/repositories?q=${query}`)
                  .then(res => res.json())
                  .then(data => {
                        setRepos(data.items);
                        setLoading(false);
                  });
      }

      return (
            <div className="App">
                  <Header fetchRepos={fetchRepos}/>
                  {
                        loading === true ? <div className="loading"></div> : null
                  }
                  <div className="container">
                        {
                              repos.map(repo => <Repository repo={repo} key={Math.random()} />)
                        }
                  </div>
            </div>
      );
}

export default App;

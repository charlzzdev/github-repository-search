import React, { useState, useEffect } from 'react';
import Repository from './components/Repository';

const App = () => {
      const [repos, setRepos] = useState([]);

      async function fetchRepos() {
            await fetch('https://api.github.com/search/repositories?q=javascript')
                  .then(res => res.json())
                  .then(data => setRepos(data.items));
      }

      useEffect(() => {
            fetchRepos();
      }, []);

      return (
            <div className="App">
                  {
                        repos.map(repo => <Repository repo={repo} key={Math.random()} />)
                  }
            </div>
      );
}

export default App;

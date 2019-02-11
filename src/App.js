import React, { useReducer } from 'react';
import Header from './components/Header';
import Repository from './components/Repository';

const App = () => {
      const initialState = {
            repos: [],
            loading: false,
            error: false
      };
      const [state, setState] = useReducer((state, newState) => ({...state, ...newState}), initialState);

      async function fetchRepos(query) {
            setState({ loading: true });
            await fetch(`https://api.github.com/search/repositories?q=${query}`)
                  .then(res => res.json())
                  .then(data => {
                        console.log(data)
                        setState({
                              loading: false,
                              repos: data.items,
                              error: false
                        });
                  })
                  .catch(err => {
                        setState({
                              loading: false,
                              error: true
                        });
                  });
      }

      return (
            <div className="App">
                  <Header fetchRepos={fetchRepos}/>
                  {
                        state.loading ? <div className="loading"></div> : null
                  }
                  {
                        state.error ? <h1 style={{textAlign: "center"}}>Error: failed retrieving repositories</h1> : null
                  }
                  <div className="container">
                        {
                              state.repos.map(repo => <Repository repo={repo} key={Math.random()} />)
                        }
                  </div>
            </div>
      );
}

export default App;

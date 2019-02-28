import React, { useReducer } from 'react';
import Header from './components/Header';
import Repository from './components/Repository';
import { Container, Grid } from 'semantic-ui-react';
import RepoLoader from './components/RepoLoader';

const App = () => {
      const initialState = {
            repos: [],
            loading: false,
            error: false
      };
      const [state, setState] = useReducer((state, newState) => ({...state, ...newState}), initialState);

      async function fetchRepos(query) {
            setState({ loading: true });
            await fetch(`https://api.github.com/search/repositories?q=${query}&per_page=3`)
                  .then(res => res.json())
                  .then(data => {
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
            <Container textAlign="center">
                  <Header fetchRepos={fetchRepos}/>
                  {
                        state.loading ? <RepoLoader /> : null
                  }
                  {
                        state.error ? <h1 style={{textAlign: "center"}}>Error: failed retrieving repositories</h1> : null
                  }
                  <Grid centered style={{marginTop: "1rem"}}>
                        {
                              state.repos.map(repo => <Repository repo={repo} key={Math.random()} />)
                        }
                  </Grid>
            </Container>
      );
}

export default App;

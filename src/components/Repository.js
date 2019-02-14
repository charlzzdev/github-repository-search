import React, { useReducer } from 'react';

const Repository = ({ repo }) => {
      const [state, setState] = useReducer((state, newState) => ({...state, ...newState}), {});

      const handleCopy = (e) => {
            let input = document.createElement('input');
            let body = document.querySelector('body');
            input.value = e.target.getAttribute('data-url');
            body.appendChild(input);
            input.select();
            document.execCommand('copy');
            body.removeChild(input);
            e.target.focus();
      }

      async function handleDetails(what, url) {
            await fetch(url)
                  .then(res => res.json())
                  .then(data => {
                        setState({
                              [repo.full_name]: {
                                    [what]: data
                              }
                        });
                  });
      }

      return (
            <div className="card">
                  <div className="content">
                        <div className="card-header"><a href={repo.html_url} target="blank"> {repo.name} </a><span className="badge">{repo.private ? 'private' : 'public'}</span></div>
                        <div className="card-subtitle">{repo.full_name}</div>
                        <div className="card-desc">{repo.description}</div>
                        <div className="row">
                              <div className="btn commits" onClick={() => handleDetails('commits', repo.commits_url.split('{')[0])}>
                                    Commits
                                    {
                                          state[repo.full_name] !== undefined && state[repo.full_name].commits !== undefined ? state[repo.full_name].commits.map(commit => console.log(commit.commit.message)) : null
                                    }
                              </div>
                              <div className="btn issues">
                                    Issues
                              </div>
                        </div>
                        <div className="actions">
                              <button  className="btn clone-url" data-url={repo.clone_url} onClick={handleCopy}></button>
                        </div>
                  </div>
            </div>
      );
}

export default Repository;
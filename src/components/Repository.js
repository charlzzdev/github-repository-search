import React from 'react';

const Repository = ({ repo }) => {
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

      return (
            <div className="card">
                  <div className="content">
                        <div className="card-header"><a href={repo.html_url} target="blank"> {repo.name} </a><span className="badge">{repo.private ? 'private' : 'public'}</span></div>
                        <div className="card-subtitle">{repo.full_name}</div>
                        <div className="card-desc">{repo.description}</div>
                        <div className="row">
                              <div className="commits">
                                    Commits
                              </div>
                              <div className="issues">
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
import React, { useReducer } from 'react';
import { Button, Card, Label, Grid } from 'semantic-ui-react';
import RepoModal from './RepoModal';

const Repository = ({ repo }) => {
      const [state, setState] = useReducer((state, newState) => ({...state, ...newState}), {});

      const handleCopy = (e) => {
            const input = document.createElement('input');
            const body = document.querySelector('body');
            input.value = e.target.getAttribute('data-url');
            body.appendChild(input);
            input.select();
            document.execCommand('copy');
            body.removeChild(input);
            const target = e.target;
            const innerHTML = target.innerHTML;
            target.children[1].innerHTML = 'Copied!';
            setTimeout(() => target.innerHTML = innerHTML, 2000);
      }

      async function handleDetails(what, url) {
            if(state[repo.full_name] === undefined || state[repo.full_name][what] === undefined){
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
      }

      const openModal = () => {
            handleModalState();
            handleDetails('commits', repo.commits_url.split('{')[0]);
      }

      const handleModalState = () => setState({openModal: !state.openModal});

      return (
            <Grid.Column mobile={16} computer={5} style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <Card>
                        <Card.Content>
                              <Card.Header><a href={repo.html_url} target="blank"> {repo.name} </a><Label size="mini" color="green">{repo.private ? 'private' : 'public'}</Label></Card.Header>
                              <Card.Meta>{repo.full_name}</Card.Meta>
                              <Card.Description>{repo.description}</Card.Description>
                        </Card.Content>
                        <Card.Content>
                              <Button.Group primary>
                                    <Button onClick={() => openModal()}>
                                          Commits
                                    </Button>
                                    <Button>
                                          Issues
                                    </Button>
                                    <Button animated="fade" data-url={repo.clone_url} onClick={handleCopy}>
                                          <Button.Content visible style={{pointerEvents: 'none'}}>Clone</Button.Content>
                                          <Button.Content hidden style={{pointerEvents: 'none'}}>Copy Link</Button.Content>
                                    </Button>
                              </Button.Group>
                              <RepoModal open={state.openModal} data={state[repo.full_name]} repoName={repo.full_name} close={handleModalState} />
                        </Card.Content>
                  </Card>
            </Grid.Column>
      );
}

export default Repository;
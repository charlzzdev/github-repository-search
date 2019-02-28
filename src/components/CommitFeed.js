 import React from 'react';
 import { Feed, Dimmer, Loader } from 'semantic-ui-react';
 
const CommitFeed = (props) => {
      return (
            <>
                  {
                        props.data !== undefined && props.data.commits !== undefined ? <Feed>
                              {
                                    props.data.commits.map(commit => {
                                          const commitDetails = commit.commit;
                                          const date = new Date(commitDetails.author.date);
                                          const authorAvailable = commit.author !== null;
                                          return (
                                                <Feed.Event key={Math.random()}>
                                                      <Feed.Label>
                                                            <img src={authorAvailable ? commit.author.avatar_url : ''} alt="The person's avatar" />
                                                      </Feed.Label>
                                                      <Feed.Content>
                                                            <Feed.Summary>
                                                                  <Feed.User href={authorAvailable ? commit.author.html_url : '#'} target={authorAvailable ? 'blank' : ''}>{commitDetails.author.name}</Feed.User> committed on
                                                                  <Feed.Date>{date.toLocaleString()}</Feed.Date>
                                                            </Feed.Summary>
                                                            <Feed.Meta>
                                                                  {commitDetails.message}
                                                            </Feed.Meta>
                                                      </Feed.Content>
                                                </Feed.Event>
                                          );
                                    })
                              }
                        </Feed> : <Dimmer active inverted><Loader size="massive">Loading</Loader></Dimmer>
                  }
            </>
      )
 }

 export default CommitFeed;
 
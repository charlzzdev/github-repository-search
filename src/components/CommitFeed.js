import React from 'react';
import { Feed } from 'semantic-ui-react';
import RepoLoader from './RepoLoader';
import convertDate from './convertDate';
 
const CommitFeed = (props) => {
      if(props.data === undefined || props.data.commits === undefined) return <RepoLoader />;
      let noCommits = props.data.commits.message ? true : false;

      return (
            <Feed>
                  {
                        noCommits ? 'No commits were found.' : props.data.commits.map(commit => {
                              const commitDetails = commit.commit;
                              const authorAvailable = commit.author !== null;
                              return (
                                    <Feed.Event key={Math.random()}>
                                          <Feed.Label>
                                                <img src={authorAvailable ? commit.author.avatar_url : ''} alt="The person's avatar" />
                                          </Feed.Label>
                                          <Feed.Content>
                                                <Feed.Summary>
                                                      <Feed.User href={authorAvailable ? commit.author.html_url : '#'} target={authorAvailable ? 'blank' : ''}>{commitDetails.author.name}</Feed.User> committed on
                                                      <Feed.Date>{convertDate(commitDetails.author.date)}</Feed.Date>
                                                </Feed.Summary>
                                                <Feed.Meta>
                                                      {commitDetails.message}
                                                </Feed.Meta>
                                          </Feed.Content>
                                    </Feed.Event>
                              );
                        })
                  }
            </Feed>
      )
}

export default CommitFeed;
 
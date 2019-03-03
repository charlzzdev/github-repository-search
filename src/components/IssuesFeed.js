import React from 'react';
import { Feed, Label } from 'semantic-ui-react';
import RepoLoader from './RepoLoader';
import convertDate from './convertDate';

const IssuesFeed = (props) => {
      if(props.data === undefined || props.data.issues === undefined) return <RepoLoader />;
      let noIssues = props.data.issues.length === 0 ? true : false;

      return (
            <Feed>
                  {
                        props.data.issues.map(issue => 
                              <Feed.Event key={issue.id}>
                                    <Feed.Label image={issue.user.avatar_url} />
                                    <Feed.Content>
                                          <Feed.Summary>
                                                <a href={issue.user.html_url}>{issue.user.login} {
                                                      issue.user.site_admin ? <Label color="blue">Admin</Label> : null
                                                }</a> posted an issue: {issue.title} &nbsp;
                                                <Label color={
                                                      issue.state === 'open' ? 'green' : 'red'
                                                }>{issue.state}</Label>
                                                {
                                                      issue.locked ? <Label color="red">locked</Label> : null
                                                }
                                                <Feed.Date>Created: {convertDate(issue.created_at)} | Updated: {convertDate(issue.updated_at)}</Feed.Date>
                                          </Feed.Summary>
                                          <Feed.Extra text>
                                                {issue.body}
                                          </Feed.Extra>
                                          <Feed.Meta>
                                                {
                                                      issue.pull_request !== undefined ?
                                                      <a href={issue.pull_request.html_url} target="blank">Pull</a> : null
                                                }
                                                <a href={issue.comments_url}>Comments ({issue.comments})</a>
                                          </Feed.Meta>
                                    </Feed.Content>
                              </Feed.Event>
                        )
                  }
                  
                  {
                        noIssues ? 'No issues were found.' : null
                  }
            </Feed>
      )
}

export default IssuesFeed;

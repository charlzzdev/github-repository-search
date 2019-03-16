import React, { useState } from 'react';
import { Feed, Label, Header } from 'semantic-ui-react';
import RepoLoader from './RepoLoader';
import convertDate from './convertDate';
import CommentSection from './CommentSection';

const IssuesFeed = (props) => {
      const [comments, setComments] = useState([]);

      if(props.data === undefined || props.data.issues === undefined) return <RepoLoader />;
      let noIssues = props.data.issues.length === 0 ? true : false;
      
      const renderBody = (body) => {
            let text = [];
            body.split("```").forEach((part, i) => {
                  if(i % 2 !== 0 && part !== ''){
                        text.push(
                              <pre key={i} style={{
                                    background: '#f5f5f5',
                                    padding: '0.5rem',
                                    borderRadius: '7px'
                              }}>{part}</pre>
                        );
                  } else {
                        text.push(<div key={i}>{part}</div>);
                  }
            });
            return text;
      }
      

      const getComments = (url) => {
            fetch(url)
                  .then(res => res.json())
                  .then(data => setComments(data));
      }

      return (
            <Feed>
                  {
                        props.data.issues.map(issue => {
                              return <Feed.Event key={issue.id}>
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
                                                {renderBody(issue.body)}
                                          </Feed.Extra>
                                          <Feed.Meta>
                                                {
                                                      issue.pull_request !== undefined ?
                                                      <a href={issue.pull_request.html_url} target="blank">Pull</a> : null
                                                }
                                                <a href="#comments" onClick={() => getComments(issue.comments_url)}>Comments ({issue.comments})</a>
                                          </Feed.Meta>
                                    </Feed.Content>
                              </Feed.Event>
                        })
                  }

                  {
                        noIssues ? 'No issues were found.' : null
                  }
                  
                  <Header as="h1" id="comments" dividing>Comments</Header>
                  <CommentSection comments={comments} />
            </Feed>
      )
}

export default IssuesFeed;

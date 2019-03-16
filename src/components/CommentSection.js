import React from 'react';
import { Comment, Label } from 'semantic-ui-react';
import convertDate from './convertDate';

const CommentSection = ({comments}) => {
      return (
            comments.length > 0 ? (
                  <Comment.Group>
                        {
                              comments.map(comment => 
                                    <Comment key={comment.id}>
                                          <Comment.Avatar src={comment.user.avatar_url} />
                                          <Comment.Content>
                                                <Comment.Author as="a" href={comment.user.html_url} target="blank">
                                                      {comment.user.login}
                                                      {
                                                            comment.author_association !== 'NONE' ?
                                                            <Label style={{marginLeft: '0.5rem'}}>{comment.author_association}</Label> : null
                                                      }
                                                </Comment.Author>
                                                <Comment.Metadata>
                                                      <div>{convertDate(comment.created_at)}</div>
                                                </Comment.Metadata>
                                                <Comment.Text>{comment.body}</Comment.Text>
                                                <Comment.Actions>
                                                      <Comment.Action href={comment.html_url} target="blank">Reply</Comment.Action>
                                                </Comment.Actions>
                                          </Comment.Content>
                                    </Comment>
                              )
                        }
                  </Comment.Group>
            ) : 'No issue selected for comments.'
      )
}

export default CommentSection;
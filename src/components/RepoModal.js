import React from 'react';
import { Modal, Icon } from 'semantic-ui-react';
import CommitFeed from './CommitFeed';
import IssuesFeed from './IssuesFeed';

const RepoModal = (props) => {
      const showFeed = () => {
            switch(props.detail){
                  case 'commits':
                        return <CommitFeed data={props.data} />;
                  case 'issues':
                        return <IssuesFeed data={props.data} />;
                  default:
                        return null;
            }
      }

      return (
            <Modal size={'large'} open={props.open} onClose={() => props.close()}>
                  <Modal.Header>{props.repoName} <Icon name="close" style={{float: 'right', cursor: 'pointer'}} onClick={props.close}></Icon></Modal.Header>
                  <Modal.Content>
                        {
                              showFeed()
                        }
                  </Modal.Content>
            </Modal>
      )
}

export default RepoModal;

import React from 'react';

import {
  Accordion, Icon, Container, Label, Button, Segment,
} from 'semantic-ui-react';

import PropTypes from 'prop-types';

// import local
import './posts.scss';
import setIcon from 'src/utils/setIcon';


const PostsList = ({
  changeActiveIndex, activeIndex, dataposts, 
}) => {

  
  const displayContent = (event, data) => {
    changeActiveIndex(data.index);
  };

  return (

    <Container className="globalContainer">
      <Segment className="buttonSort">
        <Button icon><Icon name="book" /></Button>
        <Button icon><Icon name="football ball" /></Button>
        <Button icon><Icon name="heartbeat" /></Button>
        <Button icon><Icon name="food" className="foodSort" /></Button>
        <Button icon><Icon name="boxes" /></Button>
        <Button className="cancelButton">Effacer les filtres</Button>
      </Segment>
      <Container className="postsContainer">
        <Accordion fluid styled>

          {dataposts.map((post) =>
            <>
              <Accordion.Title
              active={activeIndex === post.id}
              index={post.id}
              className="cssTitle"
              onClick={displayContent}
              >
              <Icon name="dropdown" />
              {post.name}
              <Label icon={setIcon(post.tags)} content={post.tags} className="cssLabelPost" />
              </Accordion.Title>
              <Accordion.Content active={activeIndex === post.id}>
                <p>{post.excerpt}</p>
              </Accordion.Content>
            </>
          )}
          
        </Accordion>

      </Container>

    </Container>
  );
};

PostsList.propTypes = {
  changeActiveIndex: PropTypes.func.isRequired,
  activeIndex: PropTypes.number.isRequired,
};

export default PostsList;

import React from 'react';

import {
  Accordion, Icon, Container, Label, Button, Segment, Form,
} from 'semantic-ui-react';

import PropTypes from 'prop-types';

// import local
import './posts.scss';
import setIcon from 'src/utils/setIcon';


const PostsList = ({
  changeActiveIndex, activeIndex, dataposts, loadingPosts,
}) => {
  const displayContent = (event, data) => {
    changeActiveIndex(data.index);
  };
  const createMarkup = (content) => ({
    __html: content,
  });

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

          {loadingPosts && (
          <Accordion.Title className="cssTitle">
            <Form loading={loadingPosts}>
              Loading content
            </Form>
          </Accordion.Title>
          )}

          {!loadingPosts && dataposts.map((post) => (
            <>
              <Accordion.Title
                key={`${post.id}1`}
                active={activeIndex === post.id}
                index={post.id}
                className="cssTitle"
                onClick={displayContent}
              >
                <Icon name="dropdown" />
                <div
                  className="titleCss"
                  dangerouslySetInnerHTML={createMarkup(post.name)}
                />
                {/* {post.name} */}
                <Label icon={setIcon(post.tags)} content={post.tags} className="cssLabelPost" />
              </Accordion.Title>
              <Accordion.Content key={`${post.id}2`} active={activeIndex === post.id}>
                <div dangerouslySetInnerHTML={createMarkup(post.content)} />
              </Accordion.Content>
            </>
          ))}

        </Accordion>

      </Container>

    </Container>
  );
};

PostsList.propTypes = {
  changeActiveIndex: PropTypes.func.isRequired,
  activeIndex: PropTypes.number.isRequired,
  dataposts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
  loadingPosts: PropTypes.bool.isRequired,
};

export default PostsList;

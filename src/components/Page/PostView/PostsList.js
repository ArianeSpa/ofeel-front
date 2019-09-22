// == Import : npm
import React from 'react';
import {
  Accordion, Icon, Container, Label, Button, Segment, Form,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';

// == Import : local
import './posts.scss';
import setIcon from 'src/utils/setIcon';

// == Composant
const PostsList = ({
  changeActiveIndex, activeIndex, dataposts, loadingPosts, changeSort,
}) => {
  const displayContent = (event, data) => {
    changeActiveIndex(data.index);
  };
  const createMarkup = (content) => ({
    __html: DOMPurify.sanitize(content),
  });
  const sort = (event, data) => {
    console.log(data);
    changeSort(data.id);
  };

  return (

    <Container className="globalContainer">
      <Segment className="buttonSort">
        <Button icon id="sante" onClick={sort}><Icon name="heartbeat" /></Button>
        <Button icon id="sport"><Icon name="football ball" /></Button>
        <Button icon id="recuperation"><Icon name="bed" /></Button>
        <Button icon id="alimentation"><Icon name="food" className="foodSort" /></Button>
        <Button icon id="divers"><Icon name="boxes" /></Button>
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
  changeSort: PropTypes.func.isRequired,
};

export default PostsList;

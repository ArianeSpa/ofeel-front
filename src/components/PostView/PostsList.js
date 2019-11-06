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
  changeActiveIndex, activeIndex, dataposts, loadingPosts,
  changeSort,
  sante, sport, alimentation, recuperation, divers, cancelSort, sortDataPosts, postsToShow,
}) => {
  const displayContent = (event, data) => {
    changeActiveIndex(data.index);
  };
  const createMarkup = (content) => ({
    __html: DOMPurify.sanitize(content),
  });
  const sort = (event, data) => {
    changeSort(data.id);
    sortDataPosts(dataposts, data.id);
  };
  const cancelSortChoice = () => {
    cancelSort();
  };

  return (

    <Container id="postPageContainer">
      <Segment id="buttonSortSegment">
        <Button
          className={sante ? 'iconFocus sortIcon' : 'sortIcon'}
          icon
          id="sante"
          onClick={sort}
        >
          <Icon name="heartbeat" />
        </Button>
        <Button
          className={sport ? 'iconFocus sortIcon' : 'sortIcon'}
          icon
          id="sport"
          onClick={sort}
        >
          <Icon name="football ball" />
        </Button>
        <Button
          className={recuperation ? 'iconFocus sortIcon' : 'sortIcon'}
          icon
          id="recuperation"
          onClick={sort}
        >
          <Icon name="bed" />
        </Button>
        <Button
          className={alimentation ? 'iconFocus sortIcon' : 'sortIcon'}
          icon
          id="alimentation"
          onClick={sort}
        >
          <Icon name="food" className="foodSort" />
        </Button>
        <Button
          className={divers ? 'iconFocus sortIcon' : 'sortIcon'}
          icon
          id="divers"
          onClick={sort}
        >
          <Icon name="boxes" />
        </Button>
        <Button
          className="cancelButton"
          onClick={cancelSortChoice}
        >
          Effacer les filtres
        </Button>
      </Segment>
      <Container id="postsContainer">
        <Accordion fluid styled>

          {loadingPosts && (
          <Accordion.Title className="titleBox">
            <Form loading={loadingPosts}>
              Loading content
            </Form>
          </Accordion.Title>
          )}

          {!loadingPosts && postsToShow.map((post) => (
            <React.Fragment key={`${post.id}2`}>
              <Accordion.Title
                active={activeIndex === post.id}
                className="titleBox"
                index={post.id}
                onClick={displayContent}
              >
                <Icon name="dropdown" />
                <div
                  className="titlePost"
                  dangerouslySetInnerHTML={createMarkup(post.name)}
                />
                <Label
                  className="labelPost"
                  content={post.tags}
                  icon={setIcon(post.tags)}
                />
              </Accordion.Title>
              <Accordion.Content active={activeIndex === post.id}>
                <div dangerouslySetInnerHTML={createMarkup(post.content)} />
              </Accordion.Content>
            </React.Fragment>
          ))}

        </Accordion>
      </Container>
    </Container>
  );
};

PostsList.propTypes = {
  activeIndex: PropTypes.number.isRequired,
  alimentation: PropTypes.bool,
  cancelSort: PropTypes.func.isRequired,
  changeActiveIndex: PropTypes.func.isRequired,
  changeSort: PropTypes.func.isRequired,
  dataposts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
  divers: PropTypes.bool,
  loadingPosts: PropTypes.bool.isRequired,
  postsToShow: PropTypes.array.isRequired,
  recuperation: PropTypes.bool,
  sante: PropTypes.bool,
  sortDataPosts: PropTypes.func.isRequired,
  sport: PropTypes.bool,
};

PostsList.defaultProps = {
  alimentation: PropTypes.null,
  divers: PropTypes.null,
  recuperation: PropTypes.null,
  sante: PropTypes.null,
  sport: PropTypes.null,
};

export default PostsList;

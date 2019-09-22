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

    <Container className="globalContainer">
      <Segment className="buttonSort">
        <Button icon id="sante" onClick={sort} className={sante ? 'iconFocus' : ''}><Icon name="heartbeat" /></Button>
        <Button icon id="sport" onClick={sort} className={sport ? 'iconFocus' : ''}><Icon name="football ball" /></Button>
        <Button icon id="recuperation" onClick={sort} className={recuperation ? 'iconFocus' : ''}><Icon name="bed" /></Button>
        <Button icon id="alimentation" onClick={sort} className={alimentation ? 'iconFocus' : ''}><Icon name="food" className="foodSort" /></Button>
        <Button icon id="divers" onClick={sort} className={divers ? 'iconFocus' : ''}><Icon name="boxes" /></Button>
        <Button className="cancelButton" onClick={cancelSortChoice}>Effacer les filtres</Button>
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

          {!loadingPosts && postsToShow.map((post) => (
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
  sante: PropTypes.bool,
  sport: PropTypes.bool,
  alimentation: PropTypes.bool,
  recuperation: PropTypes.bool,
  divers: PropTypes.bool,
  cancelSort: PropTypes.func.isRequired,
  sortDataPosts: PropTypes.func.isRequired,
  postsToShow: PropTypes.array.isRequired,
};

PostsList.defaultProps = {
  sante: PropTypes.null,
  sport: PropTypes.null,
  alimentation: PropTypes.null,
  recuperation: PropTypes.null,
  divers: PropTypes.null,
};

export default PostsList;

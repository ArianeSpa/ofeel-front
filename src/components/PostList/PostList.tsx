// == Import : npm
import React from "react";
import {
  Accordion,
  Icon,
  Container,
  Label,
  Button,
  Segment,
  Form,
  AccordionTitleProps,
  ButtonProps,
} from "semantic-ui-react";
// eslint-disable-next-line import/no-extraneous-dependencies
import DOMPurify from "dompurify";

// == Import : local
import "./postlist.scss";
import setIcon from "@/utils/setIcon";

type PostListProps = {
  activeIndex: number;
  alimentation?: boolean;
  cancelSort: () => void;
  changeActiveIndex: (index: any) => void;
  changeSort: (value: any) => void;
  dataposts: { id: number }[];
  divers?: boolean;
  loadingPosts: boolean;
  postsToShow: any[];
  recuperation?: boolean;
  sante?: boolean;
  sortDataPosts: (
    dataposts: {
      id: number;
    }[],
    id: any
  ) => void;
  sport?: boolean;
};

// == Composant
export const PostList: React.FC<PostListProps> = ({
  changeActiveIndex,
  activeIndex,
  dataposts,
  loadingPosts,
  changeSort,
  sante,
  sport,
  alimentation,
  recuperation,
  divers,
  cancelSort,
  sortDataPosts,
  postsToShow,
}) => {
  const displayContent = (
    event: React.MouseEvent<HTMLDivElement>,
    data: AccordionTitleProps
  ) => {
    changeActiveIndex(data.index);
  };
  const createMarkup = (content: string) => ({
    __html: DOMPurify.sanitize(content),
  });
  const sort = (
    event: React.MouseEvent<HTMLButtonElement>,
    data: ButtonProps
  ) => {
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
          className={sante ? "iconFocus sortIcon" : "sortIcon"}
          icon
          id="sante"
          onClick={sort}
        >
          <Icon name="heartbeat" />
        </Button>
        <Button
          className={sport ? "iconFocus sortIcon" : "sortIcon"}
          icon
          id="sport"
          onClick={sort}
        >
          <Icon name="football ball" />
        </Button>
        <Button
          className={recuperation ? "iconFocus sortIcon" : "sortIcon"}
          icon
          id="recuperation"
          onClick={sort}
        >
          <Icon name="bed" />
        </Button>
        <Button
          className={alimentation ? "iconFocus sortIcon" : "sortIcon"}
          icon
          id="alimentation"
          onClick={sort}
        >
          <Icon name="food" className="foodSort" />
        </Button>
        <Button
          className={divers ? "iconFocus sortIcon" : "sortIcon"}
          icon
          id="divers"
          onClick={sort}
        >
          <Icon name="boxes" />
        </Button>
        <Button className="cancelButton" onClick={cancelSortChoice}>
          Effacer les filtres
        </Button>
      </Segment>
      <Container id="postsContainer">
        <Accordion fluid styled>
          {loadingPosts && (
            <Accordion.Title className="titleBox">
              <Form loading={loadingPosts}>Loading content</Form>
            </Accordion.Title>
          )}

          {!loadingPosts &&
            postsToShow.map((post) => (
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

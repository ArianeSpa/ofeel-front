// == Import : npm
import React, { useEffect, useState } from "react";
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
import DOMPurify from "dompurify";

// == Import : local
import setIcon from "@/utils/setIcon";
import "./postlist.scss";
import { PostModel } from "@/models/post.model";

enum SortNameEnum {
  FOOD = "food",
  HEALTH = "health",
  SPORT = "sport",
  REST = "rest",
  VARIOUS = "various",
}

// == Composant
export const PostList: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const [loadingPosts, setLoadingPosts] = useState<boolean>(false);
  const [sortedPosts, setSortedPosts] = useState<PostModel[]>([]);
  const [sortValue, setSortValue] = useState<string | undefined>();

  /** @todo stock in store instead of state ? */
  const [dataPosts, setDataPosts] = useState<PostModel[]>([]);

  useEffect(() => {
    setLoadingPosts(true);
    /** @todo get posts data on component init ? or App init */
    const fakeResponse: PostModel[] = [];
    setDataPosts(fakeResponse);
    setSortedPosts(fakeResponse);
    setLoadingPosts(false);
  }, []);

  const sort = (
    event: React.MouseEvent<HTMLButtonElement>,
    data: ButtonProps
  ) => {
    setSortValue(data.id);
    /** @todo sort post from dataPosts with value selected */
  };

  const displayContent = (
    event: React.MouseEvent<HTMLDivElement>,
    data: AccordionTitleProps
  ) => {
    setActiveIndex(Number(data.index));
  };

  const cancelSortChoice = () => {
    setSortedPosts(dataPosts);
    setSortValue(undefined);
  };

  return (
    <Container id="postPageContainer">
      <Segment id="buttonSortSegment">
        <Button
          className={`${
            sortValue === SortNameEnum.HEALTH ? "iconFocus " : ""
          }sortIcon`}
          icon
          id="sante"
          onClick={sort}
        >
          <Icon name="heartbeat" />
        </Button>
        <Button
          className={`${
            sortValue === SortNameEnum.SPORT ? "iconFocus " : ""
          }sortIcon`}
          icon
          id="sport"
          onClick={sort}
        >
          <Icon name="football ball" />
        </Button>
        <Button
          className={`${
            sortValue === SortNameEnum.REST ? "iconFocus " : ""
          }sortIcon`}
          icon
          id="recuperation"
          onClick={sort}
        >
          <Icon name="bed" />
        </Button>
        <Button
          className={`${
            sortValue === SortNameEnum.FOOD ? "iconFocus " : ""
          }sortIcon`}
          icon
          id="alimentation"
          onClick={sort}
        >
          <Icon name="food" className="foodSort" />
        </Button>
        <Button
          className={`${
            sortValue === SortNameEnum.VARIOUS ? "iconFocus " : ""
          }sortIcon`}
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
            sortedPosts.map((post) => (
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
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(post.name),
                    }}
                  />
                  <Label
                    className="labelPost"
                    content={post.tags}
                    icon={setIcon(post.tags)}
                  />
                </Accordion.Title>
                <Accordion.Content active={activeIndex === post.id}>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(post.content),
                    }}
                  />
                </Accordion.Content>
              </React.Fragment>
            ))}
        </Accordion>
      </Container>
    </Container>
  );
};

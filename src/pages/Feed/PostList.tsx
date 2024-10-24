// == Import : npm
import React, { useEffect, useState } from "react";
import {
  Accordion,
  Icon,
  Container,
  Label,
  Form,
  AccordionTitleProps,
} from "semantic-ui-react";
import DOMPurify from "dompurify";

// == Import : local
import setIcon from "@/utils/setIcon";
import "./postlist.scss";
import { PostModel } from "@/models/post.model";
import { FeedFilters } from "./FeedFilters/FeedFilters";
import { ObjectOf } from "@/utils/common";
import { FeedFiltersEnum } from "./FeedFilterButton/FeedFilterButton";
import { StyledPostList } from "./PostList.style";

const initSelectedFilters = {
  [FeedFiltersEnum.FOOD]: false,
  [FeedFiltersEnum.HEALTH]: false,
  [FeedFiltersEnum.SPORT]: false,
  [FeedFiltersEnum.REST]: false,
  [FeedFiltersEnum.VARIOUS]: false,
};
// == Composant
export const PostList: React.FC = () => {
  const [selectedFilters, setSelectedFilters] =
    useState<ObjectOf<boolean>>(initSelectedFilters);
  const [filteredPosts, setFilteredPosts] = useState<PostModel[]>([]);

  const [activeIndex, setActiveIndex] = useState<number>(0);

  const [loadingPosts, setLoadingPosts] = useState<boolean>(false);

  /** @todo stock in store instead of state ? */
  const [dataPosts, setDataPosts] = useState<PostModel[]>([]);
  const hasOneFilter = Object.values(selectedFilters).some((filter) => filter);

  useEffect(() => {
    setLoadingPosts(true);
    /** @todo get posts data on component init ? or App init */
    const fakeResponse: PostModel[] = [];
    setDataPosts(fakeResponse);
    setFilteredPosts(fakeResponse);
    setLoadingPosts(false);
  }, []);

  useEffect(() => {
    if (!hasOneFilter) {
      setFilteredPosts(dataPosts);
    } else {
      const newFilteredList = dataPosts.filter((post) => post); // TODO
      setFilteredPosts(newFilteredList);
    }
  }, [selectedFilters]);

  const handleSelectedFilters = (name: FeedFiltersEnum) => {
    setSelectedFilters((state) => ({
      ...state,
      [name]: !state[name],
    }));
  };

  const resetFilters = () => setSelectedFilters(initSelectedFilters);

  const displayContent = (
    event: React.MouseEvent<HTMLDivElement>,
    data: AccordionTitleProps
  ) => {
    setActiveIndex(Number(data.index));
  };

  return (
    <Container id="postPageContainer">
      <FeedFilters
        hasOneFilter={hasOneFilter}
        selectedFilters={selectedFilters}
        handleSelectedFilters={handleSelectedFilters}
        resetFilters={resetFilters}
      />

      <StyledPostList>
        <Accordion fluid styled>
          {loadingPosts && (
            <Accordion.Title className="titleBox">
              <Form loading={loadingPosts}>Loading content</Form>
            </Accordion.Title>
          )}

          {!loadingPosts &&
            filteredPosts.map((post) => (
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
                    // eslint-disable-next-line react/no-danger
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
                    // eslint-disable-next-line react/no-danger
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(post.content),
                    }}
                  />
                </Accordion.Content>
              </React.Fragment>
            ))}
        </Accordion>
      </StyledPostList>
    </Container>
  );
};

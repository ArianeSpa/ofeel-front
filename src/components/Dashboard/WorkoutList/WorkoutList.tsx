// == Import : npm
import React from "react";
import DOMPurify from "dompurify";

import {
  Container,
  Item,
  Image,
  Segment,
  Button,
  Accordion,
  Icon,
  Header,
  ButtonProps,
  AccordionTitleProps,
} from "semantic-ui-react";

// == Import : local
import "./workout.scss";
import setImageWorkout from "@/utils/setImageWorkout";

type WorkoutListProps = {
  activeIndex: number;
  cancelSort: () => void;
  changeActiveIndex: (index?: string | number) => void;
  changeSort: (id: string) => void;
  confirme: boolean;
  course: boolean;
  debutant: boolean;
  intermediaire: boolean;
  maison: boolean;
  salle: boolean;
  sortWorkoutData: (list: any[], id: string) => void;
  workoutList: { id: number }[];
  workoutToShow: any[];
};
// == Composant
export const WorkoutList: React.FC<WorkoutListProps> = ({
  workoutList,
  changeActiveIndex,
  activeIndex,
  course,
  salle,
  maison,
  debutant,
  intermediaire,
  confirme,
  changeSort,
  sortWorkoutData,
  workoutToShow,
  cancelSort,
}) => {
  const createMarkup = (content: string) => {
    const deleteLinkTag = content.replace(/<[^>]*a[^>]*>/g, "");
    const transformBlank = deleteLinkTag.replace(/&nbsp;/g, " ");
    const deleteEmTag = transformBlank.replace(/<[^>]*em[^>]*>/g, "");
    const purifiedContent = { __html: DOMPurify.sanitize(deleteEmTag) };
    return purifiedContent;
  };
  const displayContent = (_event: any, data: AccordionTitleProps) => {
    changeActiveIndex(data.index);
  };
  const sort = (_event: any, data: ButtonProps) => {
    changeSort(data.id);
    sortWorkoutData(workoutList, data.id);
  };
  const cancelSortChoice = () => {
    cancelSort();
  };
  let cancel = false;
  if (course || salle || maison || debutant || intermediaire || confirme) {
    cancel = true;
  }
  if (
    !course &&
    !salle &&
    !maison &&
    !debutant &&
    !intermediaire &&
    !confirme
  ) {
    cancelSort();
  }
  return (
    <Container id="workoutContainer">
      <Header id="workoutSubtitle" as="h3">
        Vos séances de sport
      </Header>
      <Segment id="workoutButtonSegment">
        <Button
          className={course ? "courseSelected selected" : ""}
          id="course"
          onClick={sort}
        >
          Course à pied
        </Button>
        <Button
          className={salle ? "salleSelected selected" : ""}
          id="salle"
          onClick={sort}
        >
          Musculation en salle
        </Button>
        <Button
          className={maison ? "maisonSelected selected" : ""}
          id="maison"
          onClick={sort}
        >
          A la maison
        </Button>
        <Button
          className={debutant ? "debutantSelected selected" : ""}
          id="debutant"
          onClick={sort}
        >
          Débutant
        </Button>
        <Button
          className={intermediaire ? "interSelected selected" : ""}
          id="intermediaire"
          onClick={sort}
        >
          Intermédiaire
        </Button>
        <Button
          className={confirme ? "confirmeSelected selected" : ""}
          id="confirme"
          onClick={sort}
        >
          Confirmé
        </Button>
        {cancel && (
          <Button id="cancelButton" onClick={cancelSortChoice}>
            Annuler le tri
          </Button>
        )}
      </Segment>
      <Container stackable="true" id="trainingContainer">
        <Accordion fluid styled id="trainingAccordion">
          {workoutToShow.map((currentWorkout) => (
            <React.Fragment key={currentWorkout.id}>
              <Accordion.Title
                active={activeIndex === currentWorkout.id}
                className="wodTitle"
                index={currentWorkout.id}
                onClick={displayContent}
              >
                <Icon name="dropdown" />
                <Item.Header className="wodHeader">
                  {currentWorkout.name}
                </Item.Header>
              </Accordion.Title>
              <Accordion.Content
                active={activeIndex === currentWorkout.id}
                className="wodAccordion"
              >
                <Container className="wodContainer">
                  <Image
                    className="imageWod"
                    spaced="left"
                    src={setImageWorkout(currentWorkout.slug)}
                    ui={false}
                    wrapped
                  />
                  <div
                    className="contentWod"
                    dangerouslySetInnerHTML={createMarkup(
                      currentWorkout.content
                    )}
                  />
                </Container>
              </Accordion.Content>
            </React.Fragment>
          ))}
        </Accordion>
      </Container>
    </Container>
  );
};

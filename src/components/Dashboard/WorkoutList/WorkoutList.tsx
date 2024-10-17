// == Import : npm
import React, { useEffect, useState } from "react";
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
  AccordionTitleProps,
} from "semantic-ui-react";

// == Import : local
import "./workout.scss";
import setImageWorkout from "@/utils/setImageWorkout";
import { WorkoutSubjectEnum } from "@/models/reducer.model";
import { workouts } from "@/datas/workouts";
import { WorkoutModel } from "@/models/workout.model";

// == Composant
export const WorkoutList: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>();
  const [course, setCourse] = useState<boolean>(false);
  const [salle, setSalle] = useState<boolean>(false);
  const [maison, setMaison] = useState<boolean>(false);
  const [debutant, setDebutant] = useState<boolean>(false);
  const [intermediaire, setIntermediaire] = useState<boolean>(false);
  const [confirme, setConfirme] = useState<boolean>(false);

  const [workoutToShow, setWorkoutToShow] = useState<WorkoutModel[]>([]);

  const hasFilter =
    course || maison || salle || debutant || intermediaire || confirme;

  useEffect(() => {
    if (!hasFilter) {
      setWorkoutToShow(workouts);
    } else {
      const newList = workouts.filter((element) => {
        const isCourse =
          course && element.tags?.includes(WorkoutSubjectEnum.course);
        const isSalle =
          salle && element.tags?.includes(WorkoutSubjectEnum.salle);
        const isMaison =
          maison && element.tags?.includes(WorkoutSubjectEnum.maison);
        const isDebutant =
          debutant && element.tags?.includes(WorkoutSubjectEnum.debutant);
        const isInter =
          intermediaire &&
          element.tags?.includes(WorkoutSubjectEnum.intermediaire);
        const isConfirme =
          confirme && element.tags?.includes(WorkoutSubjectEnum.confirme);
        return (
          isCourse || isSalle || isMaison || isDebutant || isInter || isConfirme
        );
      });
      setWorkoutToShow(newList);
    }
  }, [course, maison, salle, debutant, intermediaire, confirme]);

  const createMarkup = (content: string) => {
    const deleteLinkTag = content.replace(/<[^>]*a[^>]*>/g, "");
    const transformBlank = deleteLinkTag.replace(/&nbsp;/g, " ");
    const deleteEmTag = transformBlank.replace(/<[^>]*em[^>]*>/g, "");
    const purifiedContent = { __html: DOMPurify.sanitize(deleteEmTag) };
    return purifiedContent;
  };

  const displayContent = (_event: any, data: AccordionTitleProps) => {
    setActiveIndex(data.index as number);
  };

  const handleResetFilter = () => {
    setCourse(false);
    setSalle(false);
    setMaison(false);
    setDebutant(false);
    setIntermediaire(false);
    setConfirme(false);
  };

  return (
    <Container id="workoutContainer">
      <Header id="workoutSubtitle" as="h3">
        Vos séances de sport
      </Header>
      <Segment id="workoutButtonSegment">
        <Button
          className={course ? "courseSelected selected" : ""}
          id="course"
          onClick={() => setCourse((state) => !state)}
        >
          Course à pied
        </Button>
        <Button
          className={salle ? "salleSelected selected" : ""}
          id="salle"
          onClick={() => setSalle((state) => !state)}
        >
          Musculation en salle
        </Button>
        <Button
          className={maison ? "maisonSelected selected" : ""}
          id="maison"
          onClick={() => setMaison((state) => !state)}
        >
          A la maison
        </Button>
        <Button
          className={debutant ? "debutantSelected selected" : ""}
          id="debutant"
          onClick={() => setDebutant((state) => !state)}
        >
          Débutant
        </Button>
        <Button
          className={intermediaire ? "interSelected selected" : ""}
          id="intermediaire"
          onClick={() => setIntermediaire((state) => !state)}
        >
          Intermédiaire
        </Button>
        <Button
          className={confirme ? "confirmeSelected selected" : ""}
          id="confirme"
          onClick={() => setConfirme((state) => !state)}
        >
          Confirmé
        </Button>
        {hasFilter && (
          <Button id="cancelButton" onClick={handleResetFilter}>
            Effacer les filtres
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
                  {currentWorkout.title}
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

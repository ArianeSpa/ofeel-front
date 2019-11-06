// == Import : npm
import React from 'react';
import DOMPurify from 'dompurify';
import PropTypes from 'prop-types';
import {
  Container, Item, Image, Segment, Button, Accordion, Icon, Header,
} from 'semantic-ui-react';

// == Import : local
import './workout.scss';
import setImageWorkout from 'src/utils/setImageWorkout';

// == Composant
const WorkoutList = ({
  workoutList, changeActiveIndex, activeIndex,
  course, salle, maison, debutant, intermediaire, confirme,
  changeSort, sortWorkoutData, workoutToShow, cancelSort,
}) => {
  const createMarkup = (content) => {
    const deleteLinkTag = content.replace(/<[^>]*a[^>]*>/g, '');
    const transformBlank = deleteLinkTag.replace(/&nbsp;/g, ' ');
    const deleteEmTag = transformBlank.replace(/<[^>]*em[^>]*>/g, '');
    const purifiedContent = { __html: DOMPurify.sanitize(deleteEmTag) };
    return (purifiedContent);
  };
  const displayContent = (event, data) => {
    changeActiveIndex(data.index);
  };
  const sort = (event, data) => {
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
  if (!course && !salle && !maison && !debutant && !intermediaire && !confirme) {
    cancelSort();
  }
  return (
    <Container id="workoutContainer">
      <Header id="workoutSubtitle" as="h3">Vos séances de sport</Header>
      <Segment id="workoutButtonSegment">
        <Button
          className={course ? 'courseSelected selected' : ''}
          id="course"
          onClick={sort}
        >
          Course à pied
        </Button>
        <Button
          className={salle ? 'salleSelected selected' : ''}
          id="salle"
          onClick={sort}
        >
          Musculation en salle
        </Button>
        <Button
          className={maison ? 'maisonSelected selected' : ''}
          id="maison"
          onClick={sort}
        >
          A la maison
        </Button>
        <Button
          className={debutant ? 'debutantSelected selected' : ''}
          id="debutant"
          onClick={sort}
        >
          Débutant
        </Button>
        <Button
          className={intermediaire ? 'interSelected selected' : ''}
          id="intermediaire"
          onClick={sort}
        >
          Intermédiaire
        </Button>
        <Button
          className={confirme ? 'confirmeSelected selected' : ''}
          id="confirme"
          onClick={sort}
        >
          Confirmé
        </Button>
        { cancel && (
          <Button
            id="cancelButton"
            onClick={cancelSortChoice}
          >
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
                    dangerouslySetInnerHTML={createMarkup(currentWorkout.content)} 
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

WorkoutList.propTypes = {
  activeIndex: PropTypes.number.isRequired,
  cancelSort: PropTypes.func.isRequired,
  changeActiveIndex: PropTypes.func.isRequired,
  changeSort: PropTypes.func.isRequired,
  confirme: PropTypes.bool,
  course: PropTypes.bool,
  debutant: PropTypes.bool,
  intermediaire: PropTypes.bool,
  maison: PropTypes.bool,
  salle: PropTypes.bool,
  sortWorkoutData: PropTypes.func.isRequired,
  workoutList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
  workoutToShow: PropTypes.array.isRequired,
};

WorkoutList.defaultProps = {
  confirme: PropTypes.null,
  course: PropTypes.null,
  debutant: PropTypes.null,
  intermediaire: PropTypes.null,
  maison: PropTypes.null,
  salle: PropTypes.null,
};

export default WorkoutList;

// == Import : npm
import React from 'react';
import DOMPurify from 'dompurify';
import PropTypes from 'prop-types';
import {
  Container, Item, Image, Segment, Button, Accordion, Icon,
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
  const createMarkup = (content) => ({
    __html: DOMPurify.sanitize(content),
  });
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
  return (
    <Container className="globalContainer">
      <Segment className="buttonSort">
        <Button id="course" onClick={sort} className={course ? 'courseFocus' : ''}>Course</Button>
        <Button id="salle" onClick={sort} className={salle ? 'salleFocus' : ''}>Salle</Button>
        <Button id="maison" onClick={sort} className={maison ? 'maisonFocus' : ''}>Maison</Button>
        <Button id="debutant" onClick={sort} className={debutant ? 'debutantFocus' : ''}>Débutant</Button>
        <Button id="intermediaire" onClick={sort} className={intermediaire ? 'interFocus' : ''}>Intermédiaire</Button>
        <Button id="confirme" onClick={sort} className={confirme ? 'confirmeFocus' : ''}>Confirmé</Button>
        <Button className="cancelButton" onClick={cancelSortChoice}>Effacer les filtres</Button>
      </Segment>
      <Container className="workoutContainer" stackable="true">
        <Accordion fluid styled className="wodAccordion">

          {workoutToShow.map((currentWorkout) => (
            <>
              <Accordion.Title
                className="cssTitleWod"
                active={activeIndex === currentWorkout.id}
                index={currentWorkout.id}
                onClick={displayContent}
              >
                <Icon name="dropdown" />
                <Item.Header className="header-workout">{currentWorkout.name}</Item.Header>
              </Accordion.Title>
              <Accordion.Content active={activeIndex === currentWorkout.id}>
                <Container className="contentContainer">
                  <Image
                    spaced="left"
                    className="type-img"
                    src={setImageWorkout(currentWorkout.slug)}
                    wrapped
                    ui={false}
                  />
                  <div
                    className="contentWod"
                    dangerouslySetInnerHTML={createMarkup(currentWorkout.content)} 
                  />

                </Container>
              </Accordion.Content>

            </>
          ))}

        </Accordion>

      </Container>
    </Container>

  );
};

WorkoutList.propTypes = {
  workoutList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
  changeActiveIndex: PropTypes.func.isRequired,
  activeIndex: PropTypes.number.isRequired,
  course: PropTypes.bool,
  salle: PropTypes.bool,
  maison: PropTypes.bool,
  debutant: PropTypes.bool,
  intermediaire: PropTypes.bool,
  confirme: PropTypes.bool,
  changeSort: PropTypes.func.isRequired,
  sortWorkoutData: PropTypes.func.isRequired,
  workoutToShow: PropTypes.array.isRequired,
  cancelSort: PropTypes.func.isRequired,
};

WorkoutList.defaultProps = {
  course: PropTypes.null,
  salle: PropTypes.null,
  maison: PropTypes.null,
  debutant: PropTypes.null,
  intermediaire: PropTypes.null,
  confirme: PropTypes.null,
};

export default WorkoutList;

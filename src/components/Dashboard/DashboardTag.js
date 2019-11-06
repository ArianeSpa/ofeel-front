// == Import : npm
import React from 'react';
import { Segment, Icon } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Composant
const DashboardTag = ({ tag }) => (
  <Segment
    as={NavLink}
    className={`${tag}Segment dashboardTag`}
    id={
        window.location.href.includes(tag)
          ? 'focus'
          : ''
        }
    name={tag}
    to={`/dashboard/${tag}`}
  >
    <div
      className="tagBorder"
      id={
            window.location.href.includes(tag)
              ? tag
              : ''
        }
    />
    <div className="tagIcon">
      <Icon
        className="icons"
        id={
            window.location.href.includes(tag)
              ? `${tag}Icon`
              : ''
            }
        name={
            (tag === 'myfeeling' && 'user')
            || (tag === 'goals' && 'crosshairs')
            || (tag === 'mealplan' && 'food')
            || (tag === 'workout' && 'futbol')
            }
      />
    </div>
  </Segment>
);

DashboardTag.propTypes = {
  tag: PropTypes.string.isRequired,
};

export default DashboardTag;

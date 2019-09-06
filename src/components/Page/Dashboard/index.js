import React from 'react';
import { Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';


const Dashboard = () => (
  <div>
    <div>Dashboard</div>
    <Menu text className="navbar">
      {/* {!logged && (
      <Menu.Item as={NavLink} exact to="/" className="navbar" name="Accueil" />
      )}
      {logged && (
      <Menu.Item as={NavLink} to="/dashboard" className="navbar" name="Tableau de bord" />
      )} */}
      <Menu.Item as={NavLink} to="/dashboard/goals" className="dashboardItem" name="goals" />
      <Menu.Item as={NavLink} to="/dashboard/myfeeling" className="dashboardItem" name="myfeeling" />
      <Menu.Item as={NavLink} to="/dashboard/mealplan" className="dashboardItem" name="mealplan" />
      <Menu.Item as={NavLink} to="/dashboard/workout" className="dashboardItem" name="workout" />
    </Menu>
  </div>
);

// Dashboard.propTypes = {
//   logged: PropTypes.bool.isRequired,
// };

export default Dashboard;

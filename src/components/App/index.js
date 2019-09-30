// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';


// == Import : local
import './app.scss';
import Header from 'src/containers/Header';
import Main from 'src/containers/Main';
import Footer from 'src/components/Footer';

// == Composant
const App = ({ catchFoodInfo, catchPostsInfo, catchWorkoutInfo }) => {

  catchFoodInfo();
  catchPostsInfo();
  catchWorkoutInfo();

  return (
    <div id="app">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

// class App extends React.Component {
//   componentDidMount() {
//     const { catchFoodInfo, catchPostsInfo, catchWorkoutInfo } = this.props;
//     catchFoodInfo();
//     catchPostsInfo();
//     catchWorkoutInfo();
//   }

//   render() {
//     return (
//       <div id="app">
//         <Header />
//         <Page />
//         <Footer />
//       </div>
//     );
//   }
// }

App.propTypes = {
  catchFoodInfo: PropTypes.func.isRequired,
  catchPostsInfo: PropTypes.func.isRequired,
  catchWorkoutInfo: PropTypes.func.isRequired,
};
// == Export
export default App;

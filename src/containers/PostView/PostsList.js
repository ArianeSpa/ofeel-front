// == Import : npm
import { connect } from 'react-redux';

// == Import : local
/* import PostsList from 'src/components/PostsList'; */

// Action Creators

/* === State (données) === */
const mapStateToProps = (state) => ({
  message: state.message,
});

/* === Actions === */
const mapDispatchToProps = {};

// Container
const PostsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostsList);

// == Export
export default PostsListContainer;

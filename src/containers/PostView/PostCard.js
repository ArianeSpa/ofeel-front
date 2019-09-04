// == Import : npm
import { connect } from 'react-redux';

// == Import : local
/* import PostCard from 'src/components/PostCard'; */

// Action Creators

/* === State (données) === */
const mapStateToProps = (state) => ({
  message: state.message,
});

/* === Actions === */
const mapDispatchToProps = {};

// Container
const PostCardContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostCard);

// == Export
export default PostCardContainer;

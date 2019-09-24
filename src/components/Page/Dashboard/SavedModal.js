import React from 'react';
import { Message } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import './goals.scss';

// const SavedModal = ({ content, preferenceSaved }) => {
//   const handleDismiss = () => {
//     preferenceSaved('');
//     console.log("je suis dans le comp SavedModal");
//   };
//   return (
//     <>
//       <Message
//         size="tiny"
//         compact
//         success
//         content={content}
//         onDismiss={handleDismiss}
//       />
//       {/* <Icon name="window close"/> */}
//     </>
//   );
// };

class SavedModal extends React.Component {
  handleDismiss = () => {
    const { preferenceSaved } = this.props;
    preferenceSaved('');
  };

  componentWillUnmount = () => {
    const { preferenceSaved } = this.props;
    preferenceSaved('');
  };

  render() {
    const { content, positive, error } = this.props;

    return (
      <>
        <Message
          size="tiny"
          compact
          content={content}
          onDismiss={this.handleDismiss}
          positivie={positive}
          error={error}
        />
      </>
    );
  }
}


SavedModal.propTypes = {
  content: PropTypes.string.isRequired,
  preferenceSaved: PropTypes.func.isRequired,
  positive: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
};

export default SavedModal;

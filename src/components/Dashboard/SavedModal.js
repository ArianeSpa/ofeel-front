import React from 'react';
import { Message } from 'semantic-ui-react';
import PropTypes from 'prop-types';


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
          positive={positive}
          error={error}
        />
      </>
    );
  }
}


SavedModal.propTypes = {
  content: PropTypes.string.isRequired,
  preferenceSaved: PropTypes.func.isRequired,
  positive: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
};

export default SavedModal;

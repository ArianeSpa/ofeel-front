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
    const {
      content, list, positive, error,
    } = this.props;
    return (
      <>
        <Message
          id="saveMessage"
          size="tiny"
          compact
          content={content}
          list={list}
          onDismiss={this.handleDismiss}
          positive={positive}
          error={error}
        />
      </>
    );
  }
}

SavedModal.defaultProps = {
  content: '',
  list: [],
};

SavedModal.propTypes = {
  content: PropTypes.string,
  list: PropTypes.arrayOf(
    PropTypes.string,
  ),
  preferenceSaved: PropTypes.func.isRequired,
  positive: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
};

export default SavedModal;

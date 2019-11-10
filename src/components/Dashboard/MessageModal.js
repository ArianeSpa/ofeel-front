import React from 'react';
import { Message } from 'semantic-ui-react';
import PropTypes from 'prop-types';


class MessageModal extends React.Component {
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
          className="messageModal"
          size="tiny"
          compact
          content={content && content}
          list={list && list}
          onDismiss={this.handleDismiss}
          positive={positive}
          error={error}
        />
      </>
    );
  }
}

MessageModal.propTypes = {
  content: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]).isRequired,
  list: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.array,
  ]).isRequired,
  preferenceSaved: PropTypes.func.isRequired,
  positive: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
};

export default MessageModal;

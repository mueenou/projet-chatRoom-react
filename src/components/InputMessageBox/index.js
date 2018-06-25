import React from 'react';
import PropTypes from 'prop-types';


class InputMessageBox extends React.Component {
  render() {
    return (
      <form className="chatBox-form" onSubmit={this.props.onAddMessage}>
        <input className="chatBox-input" type="textarea" value={this.props.defMessage} onChange={this.props.onInputChange} />
      </form>
    );
  }
}


InputMessageBox.propTypes = {
  defMessage: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onAddMessage: PropTypes.func.isRequired,
};

export default InputMessageBox;

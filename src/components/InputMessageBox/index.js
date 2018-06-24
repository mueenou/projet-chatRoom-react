import React from 'react';
import PropTypes from 'prop-types';


class InputMessageBox extends React.Component {
  render() {
    return (
      <form className="inputForm" onSubmit={this.props.onAddMessage}>
        <input className="inputMessage" type="textarea" value={this.props.defMessage} onChange={this.props.onInputChange} />
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

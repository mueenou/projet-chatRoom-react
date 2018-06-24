import React from 'react';
import PropTypes from 'prop-types';


class InputMessageBox extends React.Component {
  handleSubmit = (evt) => {
    // bloque le comportement par défaut
    evt.preventDefault();
    // j'execute onAddTask (fonction provenant de App)
    this.props.onAddMessage();
  };

  handleChange = (evt) => {
    // Je recup la valeur
    const { value } = evt.target;
    // J'execute la fonction pour modifier le state
    this.props.onInputChange(value);
  };

  render() {
    return (
      <form className="inputForm" onSubmit={this.handleSubmit}>
        <input className="inputMessage" type="textarea" onChange={this.handleChange} />
      </form>
    );
  }
}


InputMessageBox.propTypes = {
  onAddMessage: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default InputMessageBox;

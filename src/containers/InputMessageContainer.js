/**
 * Dépendances npm : utilitaire React-Redux
 */
import { connect } from 'react-redux';

/**
 * Dépendances locales : le composant à connecter au store
 */
import InputMessageBox from '~/components/InputMessageBox';
import { addMessage, monitorInput } from '~/store/reducer';
// import { displayCreateUser } from '~/store/reducer';
/**
 * Connection du composant au store via connect()()
 */

const mapStateToProps = (state, ownProps) => ({
  message: state.value,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onAddMessage: () => {
    dispatch(addMessage());
  },

  onInputChange: (inputMessage) => {
    dispatch(monitorInput(inputMessage));
  },
});

const InputMessageContainer = connect(
  mapStateToProps, // Props en lecture
  mapDispatchToProps, // Props en écriture
)(InputMessageBox);

export default InputMessageContainer;

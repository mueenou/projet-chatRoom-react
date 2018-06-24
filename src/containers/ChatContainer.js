/**
 * Dépendances npm : utilitaire React-Redux
 */
import { connect } from 'react-redux';

/**
 * Dépendances locales : le composant à connecter au store
 */
import Chat from '~/components/Chat';
// import { displayCreateUser } from '~/store/reducer';
/**
 * Connection du composant au store via connect()()
 */

const mapStateToProps = (state, ownProps) => ({
  view: state.value,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  changeuser: () => {
    dispatch({
      type: 'DISPLAY_CREATE_USER',
      username,
    });
  },
});

const ChatContainer = connect(
  mapStateToProps, // Props en lecture
  mapDispatchToProps, // Props en écriture
)(Chat);

export default ChatContainer;

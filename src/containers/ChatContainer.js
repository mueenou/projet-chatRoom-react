/**
 * Dépendances npm : utilitaire React-Redux
 */
import { connect } from 'react-redux';


import Chat from '~/components/Chat';


const mapStateToProps = state => ({
  message: state.message,
  userName: state.userName,
});

const mapDispatchToProps = null;

const ChatContainer = connect(
  mapStateToProps, // Props en lecture
  mapDispatchToProps, // Props en écriture
)(Chat);

export default ChatContainer;

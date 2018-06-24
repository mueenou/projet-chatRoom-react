/**
 * Dépendances npm : utilitaire React-Redux
 */
import { connect } from 'react-redux';

/**
 * Dépendances locales : le composant à connecter au store
 */
import Header from '~/components/Header';
// import { displayCreateUser } from '~/store/reducer';
/**
 * Connection du composant au store via connect()()
 */

const mapStateToProps = state => ({
  userName: state.userName,
  modify: state.modify,
});

const mapDispatchToProps = dispatch => ({
  changeUser: (evt) => {
    const { value } = evt.target;
    dispatch({
      type: 'CHANGE_USER',
      value,
    });
  },

  openBox: () => {
    dispatch({
      type: 'OPEN_BOX',
    });
  },

  closeBox: (evt) => {
    evt.preventDefault();
    dispatch({
      type: 'CLOSE_BOX',
    });
  },
});

const HeaderContainer = connect(
  mapStateToProps, // Props en lecture
  mapDispatchToProps, // Props en écriture
)(Header);

export default HeaderContainer;

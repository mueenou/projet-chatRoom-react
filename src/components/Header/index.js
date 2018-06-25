import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ userName, changeUser, modify, openBox, closeBox }) => (
  <div className="header">
    <h1>Chatroom</h1>
    <button onClick={openBox} > Changez votre pseudo </button>
    { modify &&
      <React.Fragment>
        <form className="userInputForm" onSubmit={closeBox}>
          <input className="userInputForm-input" type="text" value={userName} onChange={changeUser} />
          <button> OK </button>
        </form>
      </React.Fragment>
    }
  </div>
);

Header.propTypes = {
  userName: PropTypes.string.isRequired,
  changeUser: PropTypes.func.isRequired,
  modify: PropTypes.bool.isRequired,
  openBox: PropTypes.func.isRequired,
  closeBox: PropTypes.func.isRequired,
};


export default Header;

import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ userName, changeUser, modify, openBox, closeBox }) => (
  <div className="header">
    <h2>Chatroom</h2>
    <button onClick={openBox} > + </button>
    { modify &&
      <React.Fragment>
        <form onSubmit={closeBox}>
          <input type="text" value={userName} onChange={changeUser} />
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

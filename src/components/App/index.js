import React from 'react';
import PropTypes from 'prop-types';
import Chat from '~/containers/ChatContainer';
import Header from '~/containers/HeaderContainer';
import './app.styl';

/**
 * L'application simule un lancé de dé.
 */
const App = () => {
  return (
    <div>
      <Header />
      <Chat />
    </div>
  );
};


App.propTypes = {
};


export default App;

import React from 'react';
import PropTypes from 'prop-types';
import Chat from '~/containers/ChatContainer';
import Header from '~/containers/HeaderContainer';
import './app.styl';

/**
 * L'application simule un lancé de dé.
 */
class App extends React.Component {
  componentDidMount() {
    this.props.webSocketConnect();
  }
  render() {
    return (
      <div>
        <Header />
        <Chat />
      </div>
    );
  }
}


App.propTypes = {
  webSocketConnect: PropTypes.func.isRequired,
};


export default App;
